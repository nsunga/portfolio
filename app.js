var express = require('express');
var app = express();

app.use('/stylesheets', express.static('stylesheets'));
app.use('/scripts', express.static('scripts'));
app.use('/images', express.static('images'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000);
