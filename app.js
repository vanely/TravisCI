const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  res.status(200).json("Functioning!");
});

//export call to express to launch from other file
module.exports = app;