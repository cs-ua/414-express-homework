const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/add', function(req, res) {
const first = parseInt(req.body.first);
const second = parseInt(req.body.second);
  const sum = Number(first + second);
  res.send('Sum is ' + Number(sum));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);