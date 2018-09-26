const express = require('express');
const PORT = process.env.PORT || 8030;
const app = express();
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);

app.get('*', (req, res) => {
  console.log("User attempted to get a URI.");
  res.json("404");
});






app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});