const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.static(__dirname));

dotenv.config({path: './.env'});

/* =========================== DATABASE CONNECTION INFO ============================== */
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const uri = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;
const options = {useNewUrlParser: true};
/* =================================================================================== */

/* ================================= SERVER START ==================================== */
const port = process.env.PORT;
MongoClient.connect(uri, options, function(err, database) {
  if (err) {
    throw err;
  }
  else {
    console.log("Database connected in route '/'!");
    // db = database.db("locations");

    // Start server after initial database connection
    app.listen(port);
    console.log('Listening on port ' + port);
  }

  // db.close();
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
        console.log("Database connected in route '/'!");
        // db = database.db("locations");
      }

      // db.close();
    });
    console.log("here")

    res.sendFile(__dirname + '/index.html');
  });
/* =================================================================================== */
