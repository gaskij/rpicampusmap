const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const geolocations = require('./geolocations.json');
const Location = require('./models/Location');
const database = require('./scripts/database');
const assert = require('assert');

const app = express();


//  Passport Config
require('./config/passport')(passport);

//adding locations for first run
let db = database._connect();
Location.collection.insertMany(geolocations, {ordered: false})
.then(() => console.log("DONE Loading"))
.catch((err) => console.log(err));

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
app.use('/', require('./scripts/routes/index'));
app.use('/user', require('./scripts/routes/user'));
app.use(express.static(__dirname));


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));    
