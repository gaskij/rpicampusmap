const http = require('http');
const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const locations = require('./machine_sites.json');

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
    let dbo = db.db("forgemill");

    // Populate Database with locations if need be (ONLY FOR USERS WITH WRITE ACCESS).
    // console.log(locations);
    // dbo.collection("locations").insertMany(locations, {ordered: false})
    // .then(function(success) {
    //   console.log("Successfully added to database");
    // })
    // .catch(function(err) {
    //   console.error("ERROR:", err);
    // });


    // Download initial location data from database before starting server
    dbo.collection('locations').find().toArray()
    .then(function(result) {
      // console.log(result);(location

      var locationData = result;

      // Start server after initial database connection
      app.listen(port);
      console.log('Listening on port ' + port);
      db.close();
    })
    .catch(function(err) {
      if (err) throw err;
    });


  }
});
/* =================================================================================== */

/* =================================== HOMEPAGE ====================================== */
app.get('/', function(req, res) {
    /*
    MongoClient.connect(uri, options, function(err, db) {
      if (err) {
        throw err;
      }
      else {
        console.log("Database connected in route '/index'!");
        let dbo = db.db("locations");
      }

      db.close();
    });
    console.log("here")
    */

    res.sendFile(__dirname + '/public/views/index.html');
});

app.route('/index')
.get(function(req, res) {
  /*
  MongoClient.connect(uri, options, function(err, db) {
    if (err) {
      throw err;
    }
    else {
      console.log("Database connected in route '/index'!");
      let dbo = db.db("locations");
    }

    db.close();
  });
  console.log("here")
  */

  res.sendFile(__dirname + '/public/views/index.html');
  })
.post(jsonParser, function(req, res) {
  //get the location to highlight
  const query = req.body.query;
  const machine = req.body.machine;
  console.log(req.body);
  console.log("Query:", query);
  console.log("Machine:", machine);

  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      console.log("Database connected in route '/index'!")

      let dbo = db.db("rpicampusmap");

      // switch database if necessary
      if (machine == "true")
        dbo = db.db("forgemill");

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
/* =================================================================================== */

/* ==================================== SEARCH ======================================= */
app.route('/search')
.get(function(req, res) {
  console.log("Get search results!");
  res.sendFile(__dirname + '/public/views/searchResults.html');
})
.post(jsonParser, function(req, res) {
  const query = req.body.query;
  console.log("Query:", query);

  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      console.log("Database connected in route '/search'!")
      let db1 = db.db("rpicampusmap");
      let db2 = db.db("forgemill");
      let results = [];

      // Search the database for locations matching the given regular expression
      // Search by name and by nickname for any match of the substring
      db1.collection("locations").find({'$or': [
        {'properties.name': {'$regex': query, '$options': 'i'} },
        {'properties.nick': {'$regex': query, '$options': 'i'} }
        // add here to look through machines
      ]}).toArray()
      .then(function(result1) {
        console.log("Result1:\n", result1);
        results = results.concat(result1);
      })
      .catch(function(err) {
        if (err)
          console.error("ERROR:", err);
      });

      db2.collection("locations").find({'$or': [
        {'properties.name': {'$regex': query, '$options': 'i'} },
        {'properties.nick': {'$regex': query, '$options': 'i'} },
        {'contents.machines': {'$regex': query, '$options': 'i'} }
      ]}).toArray()
      .then(function(result2) {
        console.log("Result2:\n", result2);
        results = results.concat(result2);
        console.log("Results:\n", results);
        res.send(results);
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
  res.sendFile(__dirname + '/public/views/machine_sites_info.html')
})
.post(jsonParser, function(req, res) {
  const comment = req.body.comment;
  const query = req.body.query;
  const machine = req.body.machine;
  console.log(req.body);
  console.log("Query:", query);
  console.log("Machine:", machine);

  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      console.log("Database connected in route '/info'!")

      let dbo = db.db("rpicampusmap");

      // switch database if necessary

      if (machine == "true"){
          dbo = db.db("forgemill");
      }


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

  if (comment) {
    console.log(comment);
  }

});

/* ================================================================================== */

/* ==================================== ADMIN ======================================= */
app.route('/admin/request')
.get(function (req, res) {
  res.sendFile(__dirname + '/public/views/register.html');
})
.post(function (req, res, next) {
  const username = req.body.rcsID;
  const password = req.body.password;

  console.log("Username:", username);
  console.log("Password:", password);

  MongoClient.connect(uri, options, function(err, db) {
    if (err)
      throw err;
    else {
      console.log("Database connected in route '/admin'!")
    }
  });
});

app.route('/login')
.get(function (req, res) {
  res.sendFile(__dirname + '/public/views/login.html');
})
.post(function (req, res) {
  res.send("Logged in Successfully");
});

app.route('/admin')
.get(function (req, res) {
  // if (req.body.admin)
    res.sendFile(__dirname + '/public/views/admin.html');
  // else
  //   res.sendFile(__dirname + '/public/views/login.html');
}).post(function (req, res) {
  console.log("Post request in /admin");
});

/* ================================================================================== */

// Handle 404
 app.use(function(req, res) {
    res.status(404)
    .sendFile(__dirname + '/public/views/notfound.html', {error: '404: Page not Found'});
 });

 // Handle 500
 app.use(function(error, req, res, next) {
    res.status(500).send('Error 500: Internal Server Error');
 });
