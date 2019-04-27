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
var locations; // = require(__dirname + '/geo.json');
MongoClient.connect(uri, options, function(err, db) {
  if (err) {
    throw err;
  }
  else {
    console.log("Database connected in route '/'!");
    dbo = db.db("rpicampusmap");
    locations = dbo.collection('locations').find();

//    console.log(locations);
//    dbo.collection("locations").insertMany(locations, {ordered: false})
//    .then(function(success) {
//      console.log("Successfully added to database");
//    })
//    .catch(function(err) {
//      console.error("ERROR:", err);
//    });

    // Start server after initial database connection
    app.listen(port);
    console.log('Listening on port ' + port);
  }

   db.close();
});
/* =================================================================================== */

/* =================================== HOMEPAGE ====================================== */
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

  res.sendFile(__dirname + '/index.html');
  })
.post(jsonParser, function(req, res) {
  //get the location to highlight
  let location = req.body.location;
  let script = '<script type="text/javascript">var building = ' + location
    + ';var point = getCoords(building);showOnMap(building, point[1], point[0]);</script>';
  console.log(location);
  console.log(script);
  res.send(script);
  //this code will run the javascript function to highlight a certain location on the map, and pull up the info preview
});
/* =================================================================================== */

/* ==================================== SEARCH ======================================= */
app.route('/search')
.get(function(req, res) {
  console.log("Get search results!");
  res.sendFile(__dirname + '/searchResults.html');
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
app.route('/info:id')
.get(function (req, res) {
  res.sendFile('infoPreview.php')
});
/* ================================================================================== */
