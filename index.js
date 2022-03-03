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
  res.send([{ name: 'name1' }, { name: 'name2' }]);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
