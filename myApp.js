
var express = require('express');
var app = express();
var path = require('path');

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
module.exports = app;
