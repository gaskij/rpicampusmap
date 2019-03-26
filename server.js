const http = require('http');
const express = require('express');
const port = 3000;

var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }
    else {
        console.log("Server listening on port " + port);
    }
})
