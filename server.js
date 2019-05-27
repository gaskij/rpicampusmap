const http = require('http');
const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();
app.use(express.static(__dirname))
   .use(bodyParser.urlencoded({extended: true}))
   .use(bodyParser.json());

dotenv.config({path: './.env'});

/* =========================== DATABASE CONNECTION INFO ============================== */
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const uri = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;
const options = {useNewUrlParser: true};
/* =================================================================================== */

/* ================================= SERVER START ==================================== */
const port = process.env.PORT;

MongoClient.connect(uri, options, function(err, db) {
  if (err) {
    throw err;
  }
  else {
    console.log("Database connected in route '/'!");
    dbo = db.db("rpicampusmap");

    /* Populate Database with locations if need be (ONLY FOR USERS WITH WRITE ACCESS).
    console.log(locations);
    dbo.collection("locations").insertMany(locations, {ordered: false})
    .then(function(success) {
      console.log("Successfully added to database");
    })
    .catch(function(err) {
      console.error("ERROR:", err);
    });
    */

    // Download initiallocation data from database before starting server
    dbo.collection('locations').find().toArray()
    .then(function(result) {
      // console.log(result);

      var locationData = result;

      // Start server after initial database connection
      app.listen(port);
      console.log('Listening on port ' + port);
    })
    .catch(function(err) {
      if (err) throw err;
    });

    db.close();
  }
});
/* =================================================================================== */

/* =================================== HOMEPAGE ====================================== */
app.get('/', function(req, res) {
    MongoClient.connect(uri, options, function(err, database) {
      if (err) {
        throw err;
      }
      else {
        console.log("Database connected in route '/index'!");
        // db = database.db("locations");
      }

      // db.close();
    });
    console.log("here")

    res.sendFile(__dirname + '/public/views/index.html');

})

app.route('/index')
.get(function(req, res) {
  MongoClient.connect(uri, options, function(err, database) {
    if (err) {
      throw err;
    }
    else {
      console.log("Database connected in route '/index'!");
      // db = database.db("locations");
    }

    // db.close();
  });
  console.log("here")

  res.sendFile(__dirname + '/public/views/index.html');
  })
.post(jsonParser, function(req, res) {
  //get the location to highlight
  let location = req.body.loc;
  // let script = `<script type="text/javascript">\
  //   var building = "${location}";\
  //   var point = getCoords(building);\
  //   showOnMap(building, point[1], point[0]);\
  //   </script>`;

  console.log(location);
  // console.log(script);

  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      dbo = db.db("rpicampusmap");

      dbo.collection("locations").find({'id': location}).toArray()
      .then(function(result) {
        console.log("Results:\n", result);
        res.send(result);
      })
      .catch(function(err) {
        if (err)
          console.error("ERROR:", err);
      });
      db.close();
    }
  });


  //this code will run the javascript function to highlight a certain location on the map, and pull up the info preview
});
/* =================================================================================== */

/* ==================================== SEARCH ======================================= */
app.route('/search')
.get(function(req, res) {
  console.log("Get search results!");
  res.sendFile(__dirname + '/public/views/searchResults.html');
})
.post(jsonParser, function(req, res) {
//  console.log(req);
  const query = req.body.query;
  console.log("Query:", query);

  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      console.log("Database connected in route '/search'!")
      dbo = db.db("rpicampusmap");

      dbo.collection("locations").find({'$or': [
        {'properties.name': {'$regex': query, '$options': 'i'} },
        {'properties.nick': {'$regex': query, '$options': 'i'} }
      ]}).toArray()
      .then(function(result) {
        console.log("Results:\n", result);
        res.send(result);
      })
      .catch(function(err) {
        if (err)
          console.error("ERROR:", err);
      });
      db.close();
    }
  });
});

/* ===================================== INFO ======================================== */
app.route('/info')
.get(function (req, res) {
  res.sendFile(__dirname + '/public/views/info.html')
})
.post(jsonParser, function(req, res) {
  const query = req.body.query;
  console.log(req.body);
  console.log("Query:", query);
  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      console.log("Database connected in route '/info'!")
      dbo = db.db("rpicampusmap");

      dbo.collection("locations").find({'id': query}).toArray()
      .then(function(result) {
        console.log("Results:\n", result);
        res.send(result);
      })
      .catch(function(err) {
        if (err)
          console.error("ERROR:", err);
      });
      db.close();
    }
  });
});
/* ================================================================================== */
