const express = require('express');
const router = express.Router();
var path = require("path");

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'views/main_page.html')));

module.exports = router;
