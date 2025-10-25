
var express = require('express');
var app = express();
var path = require('path');

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
