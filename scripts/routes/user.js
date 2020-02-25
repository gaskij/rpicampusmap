const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jsonParser = bodyParser.json();

//  UserModel
const User = require('../../models/User');
const Location = require('../../models/Locations');

//  login page
router.get('/login', (req, res) => res.render('login', { page_name: "Login", layout: "layout2.ejs", extractStyles: true }));

//  Login Handle
router.post('/login', (req, res, next) => {
  console.log('authenticating\n');
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  console.log('logging out');
  req.logOut();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/user/login');
});

//  registration page
router.get('/register', (req, res) => res.render('register', { page_name: "Register", layout: "layout2.ejs", extractStyles: true }));

//  Register Handle
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' })
  }

  //check passwords match
  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' })
  }

  //check pass length
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' })
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    // Validation passed
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          // User exists
          errors.push({ msg: 'Email is already registered' })
          res.render('register', {page_name: "Register", extractStyles: true },{
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            email,
            password
          });

          //  HASH password
          bcrypt.genSalt(10, (error, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw (err);

              //  set password
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  req.flash('success_msg', 'You are now registered and can login')
                  res.redirect('/user/login');
                })
                .catch(err => console.log(err))

            }))
        }
      });
  }
});

//  Search Handle
//  TODO: make the search case insensitive and allow for regex matching instead of exact _id match
router.get('/search', jsonParser, (req, res) => {
  const query = req.query;
  console.log(query);
  
  
  // Display all location results if search with no query 
  if(query["query"]== null || query["query"]== ''){
    Location.find()
    .then(results => {
      /*results.forEach(element => {
        console.log(element['properties']['name']);
      });*/
      res.render('searchResults', { page_name: "Search", layout: "layout2.ejs", extractStyles: true, results: results, results_count: results.length});
    })
    .catch(err => {
      console.log(err)
    });
  }
  else{
    Location.find({ 
      // Find case insensitive query matches based on id, name, or nickname
      $or: [
        {
          _id: { 
            $regex: query["query"], 
            $options: "i" 
          }
        },
        {
          "properties.name": { 
            $regex: query["query"], 
            $options: "i" 
          }
        },
        {
          "properties.nick": { 
            $regex: query["query"], 
            $options: "i"
          }
        }
      ]
    })
    .then(results => {
      res.render('searchResults', { page_name: "Search", layout: "layout2.ejs", extractStyles: true, results: results, results_count: results.length});
    })
    .catch(err => {
      console.log(err)
    });
  }

  
});

// main page --- the map
router.get('/main_page', (req, res) => res.render('map', { page_name: "Map", layout: "layout2.ejs", extractStyles: true }));


router.get('/info', (req, res) => res.render('info', { page_name: "Info", layout: "layout2.ejs", extractStyles: true }));


module.exports = router; 