const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '..')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'built/index.html'));
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
