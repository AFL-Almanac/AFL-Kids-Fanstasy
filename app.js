var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.listen(8080);
console.log('Listening on port 8080!');