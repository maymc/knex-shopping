const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();

Router.get('/', (req, res) => {
  console.log("Users - Home route");
  res.json("Welcome to Users");
});

module.exports = Router;