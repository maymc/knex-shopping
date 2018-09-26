const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();
knex = require('../knex/knex.js');

Router.get('/', (req, res) => {
  console.log("Users - Home route");
  res.json("Welcome to Users");
});

Router.get('/users/:user_id', (req, res) => {
  console.log("req.params:", req.params);
  const { id } = req.params;
  console.log("id:", { id });
  knex.raw(`SELECT * FROM users WHERE id = ${id}`)
    .then(results => {
      console.log("user results:", results.row[0]);
    })
    .catch(err => {
      console.log('User not found', err);
    })
});

module.exports = Router;