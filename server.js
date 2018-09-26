const express = require('express');
const app = express();
const bodyParser = require('body-parser');
this.knex = require('./knex/knex.js');

const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////

// app.use('/users', usersRoutes);
// app.use('/products', productsRoutes);
// app.use('/cart', cartRoutes);

app.get('/', (req, res) => {
  console.log("User attempted to get a URI.");
  res.json("This is the homepage.");
});

app.get('/users', (req, res) => {
  console.log("Users - Home route");
  res.json("Welcome to Users here");
});

app.get('/users/:user_id', (req, res) => {
  console.log("req.params:", req.params);
  const { user_id } = req.params;
  console.log("id:", user_id);
  this.knex.raw(`SELECT * FROM users WHERE id = ${user_id}`)
    .then(results => {
      if (results.rows[0] !== undefined) {
        console.log("user results:", results.rows[0]);
        res.json(results.rows[0]);
      }
      else {
        res.json("User not found");
      }
    })
    .catch(err => {
      console.log('GET user error', err);
    })
});

app.post('/users/login', (req, res) => {
  console.log("req.body:", req.body);
  console.log("email:", req.body.email);
  console.log("password:", req.body.password);

  this.knex.raw(`SELECT * FROM users WHERE email = '${req.body.email}'`)
    .then(results => {
      console.log("\nresults:", results.rows[0]);
      if (results.rows[0] === undefined) {
        res.json("User not found");
      }
      else if (results.rows[0].password !== req.body.password) {
        res.json("Incorrect password");
      }
      else {
        res.json(results.rows[0]);
      }
    })
    .catch(err => {
      console.log("POST login error:", err);
    })
});




app.listen(8030, () => {
  console.log(`Listening on port 8030`);
});