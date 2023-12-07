const express = require("express");
const UserRoute = require("./routes/auth");
const app = express();

app.set("view engine", "ejs");

//Mouting User Route
app.use("/auth", UserRoute);
app;

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost: ${PORT} `);
});
