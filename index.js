const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/products", (res) => {
  console.log("Connected to React");
  res.send([{ name: 'name1' }, { name: 'name2' }]);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
