const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//  UserModel
const User = require('../models/User');

//  login page
router.get('/login', (req, res) => res.render('login',{page_name: "Login",layout: "layout2.ejs", extractStyles: true}));

//  Login Handle
router.post('/login', (req,res,next) => {
    //console.log('authenticating');
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/user/login', 
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/user/login');
});

//  registration page
router.get('/register', (req, res) => res.render('register', {page_name: "Register", layout: "layout2.ejs", extractStyles: true}));

//  Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;
    let errors = [];

    //check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill in all fields'})
    }

    //check passwords match
    if(password!=password2){
        errors.push({msg: 'Passwords do not match'})
    }

    //check pass length
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'})
    }

    if(errors.length>0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // Validation passed
        User.findOne({ email: email})
            .then(user => {
                if(user){
                    // User exists
                    errors.push({msg: 'Email is already registered'})
                    res.render('register', {
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
                    bcrypt.genSalt(10, (error,salt)=> 
                        bcrypt.hash(newUser.password,salt, (err, hash) =>{
                            if(err)throw(err);

                        //  set password
                        newUser.password=hash;
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

router.get('/search',  (req, res) => res.render('searchResults', {page_name: "Search", layout: "layout2.ejs", extractStyles: true}));
router.post('/search', jsonParser, function(req, res) {
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

// main page --- the map
router.get('/main_page', (req, res) => res.render('map', {layout: "layout2.ejs", extractStyles: true}));
router.post('/main_page', jsonParser, function(req, res) {
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


module.exports = router; 