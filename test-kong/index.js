const express = require("express");
const app = express();
const port = 5000;

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
