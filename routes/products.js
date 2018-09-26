const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();

Router.get('/', (req, res) => {
  console.log("Products - Home route");
  res.json("Welcome to Products");
});

module.exports = Router;