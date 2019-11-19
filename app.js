const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();


//  Passport Config
require('./config/passport')(passport);

//  DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true,useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err=> console.log(err));

// EJS 
app.use(expressLayouts);
app.set('view engine', 'ejs');
//app.use(express.static(__dirname)).use(bodyParser.urlencoded({extended: true})).use(bodyParser.json());

//  Bodyparser
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json())

//  Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    //cookie: { secure: true }
}));

//  Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('err_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routers
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use( express.static( "public" ) );


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));    