const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

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



// main page --- the map
router.get('/main_page', (req, res) => res.render('map', {layout: "layout2.ejs", extractStyles: true}));



module.exports = router; 