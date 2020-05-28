var express = require('express');
var app = express();
var path = require('path');

//const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
