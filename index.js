const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

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

app.get("/products", (req, res) => {
  console.log("Connected to React");
  res.send([
    { name: 'name1', price: 100, description: 'red' }, 
    { name: 'name2', price: 110, description: 'blue' }, 
    { name: 'name3', price: 120, description: 'green' }, 
    { name: 'name4', price: 130, description: 'pink' }, 
    { name: 'name5', price: 140, description: 'black' }, 
    { name: 'name6', price: 150, description: 'white' }
  ]);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
