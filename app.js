const express = require("express");
const UserRoute = require("./routes/auth");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
app.set("view engine", "ejs");

//Mouting User Route
app.use("/auth", UserRoute);
app;

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost: ${PORT} `);
});
