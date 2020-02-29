/** Node Imports */
const express = require('express');
const dotenv = require('dotenv');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

/** Mongoose Schemas */
const Location = require('../models/Location');
const User = require('../models/User');

/** General Configuration */
dotenv.config({ path: './.env' });
const port = 5000;

/** Database Configuration */
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const uri = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

/** Instantiate Express Server */
const server = express();
server
  .use(express.static(__dirname))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .listen(port);
console.log(`Listening on port ${port}`);


/** =================================================================================== */

/** =================================================================================== */
/**                                    API ROUTES                                       */
/** =================================================================================== */

// /* ================================= LOCATIONS ===================================== */
/** Actions to take on all Locations */
server.route('/api/locations')
  .get((req, res) => {
    console.log('GET: /api/locations');
    // Use Mongoose to get all location in the database
    Mongoose.connect(uri, options).then(() => {
      Location.find()
        .then((locations) => {
          Mongoose.disconnect();
          res.json(locations);
        });
    }).catch((err) => { // if there is an error retrieving, send the error.
      console.error('\tERROR:', err);
      Mongoose.disconnect();
      res.send(`ERROR: ${err}`);
    });
  })

  .post(jsonParser, (req, res) => {
    // get the location data to create
    console.log('POST: /api/locations');
    console.log(req.body);

    Mongoose.connect(uri, options).then(() => {
      Location.insertOne(req.body)
        .then((result) => {
          console.log('\tSuccessfully added location to database.\n');
          Mongoose.disconnect();
          res.json(result);
        });
    }).catch((err) => {
      console.error('\tERROR:', err);
      Mongoose.disconnect();
      res.send(`ERROR: ${err}`);
    });
  });

/** Actions to take on a single location specified by id */
server.route('/api/locations/:id')
  .get((req, res) => {
    const id = req.params;
    console.log(`GET: /api/locations/${id}`);

    Mongoose.connect(uri, options).then(() => {
      Location.findOne({ id }).then((loc) => {
        console.log('Found', loc);
        Mongoose.disconnect();
        res.json(loc);
      });
    }).catch((err) => {
      console.error('\tERROR:', err);
      Mongoose.disconnect();
      res.send(`ERROR: ${err}`);
    });
  })

  .put((req, res) => {
    const id = req.params;
    const body = req.body;
    console.log(`PUT: /api/locations/${id}`);

    Mongoose.connect(uri, options).then(() => {
      Location.findOneAndUpdate({ id }, body).then((result) => {
        console.log('Successfully updated.', result);
        Mongoose.disconnect();
        res.json(result);
      });
    }).catch((err) => {
      console.error('\tERROR:', err);
      Mongoose.disconnect();
      res.send(`ERROR: ${err}`);
    });
  })

  .delete((req, res) => {
    const { id } = req.params;
    console.log(`GET: /api/locations/${id}`);

    Mongoose.connect(uri, options).then(() => {
      Location.deleteOne({ id }).then((result) => {
        console.log(`Successfully deleted id=${id}`, result);
        Mongoose.disconnect();
        res.json(result);
      });
    }).catch((err) => {
      console.error('ERROR:', err);
      Mongoose.disconnect();
      res.send(err);
    });
  });

/** =================================================================================== */


/* =============================== FRONT END ROUTE =================================== */
server.get('/*', ((req, res) => {
  res.sendFile('./src/views/index.html');
}));
/* =================================================================================== */

/* ================================ ERROR HANDLING =================================== */
// Handle 404
server.use((req, res) => {
  res.status(404)
    .sendFile('../campusmap/index.html', { error: '404: Page not Found' });
});

// Handle 500
server.use((error, req, res, next) => {
  res.status(500).send('Error 500: Internal Server Error');
});
/* =================================================================================== */


// /* ==================================== SEARCH ======================================= */
// server.route('/search')
//   .get(function (req, res) {
//     console.log('Get search results!');
//   })
//   .post(jsonParser, function (req, res) {
//     const query = req.body.query;
//     console.log('Query:', query);

//     MongoClient.connect(uri, options, function (err, db) {
//       if (err)
//         throw err;
//       else {
//         console.log('Database connected in route "/search"!');
//         let db1 = db.db('rpicampusmap');
//         let db2 = db.db('forgemill');
//         let results = [];

//         // Search the database for locations matching the given regular expression
//         // Search by name and by nickname for any match of the substring
//         db1.collection('locations').find({
//           '$or': [
//             { 'properties.name': { '$regex': query, '$options': 'i' } },
//             { 'properties.nick': { '$regex': query, '$options': 'i' } },
//             // add here to look through machines
//           ],
//         }).toArray()
//           .then(function (result1) {
//             console.log('Result1:\n', result1);
//             results = results.concat(result1);
//           })
//           .catch(function (err) {
//             if (err)
//               console.error('ERROR:', err);
//           });

//         db2.collection('locations').find({
//           '$or': [
//             { 'properties.name': { '$regex': query, '$options': 'i' } },
//             { 'properties.nick': { '$regex': query, '$options': 'i' } },
//             { 'contents.machines': { '$regex': query, '$options': 'i' } },
//           ],
//         }).toArray()
//           .then(function (result2) {
//             console.log('Result2:\n', result2);
//             results = results.concat(result2);
//             console.log('Results:\n', results);
//             res.send(results);
//           })
//           .catch(function (err) {
//             if (err)
//               console.error('ERROR:', err);
//           });

//         db.close();
//       }
//     });

//   });
// /* =================================================================================== */

// /* ===================================== INFO ======================================== */
// server.route('/info')
//   .get(function (req, res) {
//     res.sendFile(__dirname + '/public/views/info.html');
//   })
//   .post(jsonParser, function (req, res) {
//     const comment = req.body.comment;
//     const query = req.body.query;
//     const machine = req.body.machine;
//     console.log(req.body);
//     console.log('Query:', query);
//     console.log('Machine:', machine);

//     MongoClient.connect(uri, options, function (err, db) {
//       if (err)
//         throw err;
//       else {
//         console.log('Database connected in route "/info"!');

//         let dbo = db.db('rpicampusmap');

//         // switch database if necessary

//         if (machine == 'true') {
//           dbo = db.db('forgemill');
//         }


//         dbo.collection('locations').find({ 'id': query }).toArray()
//           .then(function (result) {
//             console.log('Results:\n', result);
//             res.send(result);
//           })
//           .catch(function (err) {
//             if (err)
//               console.error('ERROR:', err);
//           });
//         db.close();
//       }
//     });

//     if (comment) {
//       console.log(comment);
//     }

//   });

// /* ================================================================================== */

// /* =================================== COMMENT ====================================== */
// server.route('/comment')
//   .post(jsonParser, function (req, res) {
//     const loc = req.body.loc;
//     const author = req.body.author;
//     const text = req.body.text;
//     const date = req.body.date;
//     console.log(req.body);
//     console.log('author:', author);
//     console.log('text:', text);
//     console.log('date:', date);

//     MongoClient.connect(uri, options, function (err, db) {
//       if (err)
//         throw err;
//       else {
//         console.log('Database connected in route "/info"!');

//         let dbo = db.db('rpicampusmap');

//         // switch database if necessary

//         if (machine == 'true') {
//           dbo = db.db('forgemill');
//         }

//         dbo.collection('locations').findOne({ '_id': loq })
//           .then(function (result) {
//             console.log('Results:\n', result);
//             res.send(result);
//           })
//           .catch(function (err) {
//             if (err)
//               console.error('ERROR:', err);
//           });
//         db.close();
//       }
//     });

//     if (comment) {
//       console.log(comment);
//     }

//   });

// /* ================================================================================== */

// /* ==================================== ADMIN ======================================= */
// server.route('/admin/request')
//   .get(function (req, res) {
//     res.sendFile(__dirname + '/public/views/register.html');
//   })
//   .post(function (req, res, next) {
//     const username = req.body.rcsID;
//     const password = req.body.password;

//     console.log('Username:', username);
//     console.log('Password:', password);

//     MongoClient.connect(uri, options, function (err, db) {
//       if (err)
//         throw err;
//       else {
//         console.log('Database connected in route "/admin"!');
//       }
//     });
//   });

// server.route('/api/login')
//   .get(function (req, res) {
//     res.sendFile(__dirname + '/public/views/login.html');
//   })
//   .post(function (req, res) {
//     res.send('Logged in Successfully');
//   });

// server.route('/api/admin')
//   .get(function (req, res) {
//     // if (req.body.admin)
//     res.sendFile(__dirname + '/public/views/admin.html');
//     // else
//     //   res.sendFile(__dirname + '/public/views/login.html');
//   }).post(function (req, res) {
//     console.log('Post request in /admin');
//   });
// /* ================================================================================== */
