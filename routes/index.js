const express = require('express');
const router = express.Router();
var path = require("path");
const {ensureAuthenticated} = require('../config/auth');

router.get('/', (req, res) => res.render('welcome', {page_name: "Welcome", layout: "layout.ejs", extractStyles: true}));

router.get('/admin', ensureAuthenticated, (req, res) => 
    res.render('admin', {
        name: req.user.name, 
        layout: "layout2.ejs", 
        extractStyles: true
    }));

module.exports = router;
