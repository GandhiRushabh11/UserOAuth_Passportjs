const express = require("express");

const app = express();

const PORT = 8000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost: ${PORT} `);
});
