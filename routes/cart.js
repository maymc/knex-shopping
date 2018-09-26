const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();

Router.get('/', (req, res) => {
  console.log("Carts - Home route");
  res.json("Welcome to Carts");
});

module.exports = Router;