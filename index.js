const { Sequelize } = require('@sequelize/core');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


const sequelize = new Sequelize('shop', 'postgres', 'postgres', {
  host: '5432',
  dialect: 'postgres'
});

app.use(function (req, res, next) {
  const allowedOrigins = ['http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, DELETE, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  return next();
});

const products = [
  { id: 1, name: 'name1', price: 100, description: 'red' },
  { id: 2, name: 'name2', price: 110, description: 'blue' },
  { id: 3, name: 'name3', price: 120, description: 'green' },
  { id: 4, name: 'name4', price: 130, description: 'pink' },
  { id: 5, name: 'name5', price: 140, description: 'black' },
  { id: 6, name: 'name6', price: 150, description: 'white' }
];

app.get("/products", (req, res) => {
  console.log("Connected to React");
  res.send(products);
});

app.get("/product/:id", (req, res) => {
  const result = products.filter(product => req.params.id == product.id);
  res.send(result);
  console.log(result);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
