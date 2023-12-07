const express = require("express");
const UserRoute = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const app = express();
app.set("view engine", "ejs");
const PassportSetup = require("./config/passport-setup");
//Mouting User Route
app.use("/auth", UserRoute);
app;

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost: ${PORT} `);
});
