// server.js
const express = require('express');

const app = express();
const port = 1425;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
