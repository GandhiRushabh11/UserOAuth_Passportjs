const express = require("express");
const UserRoute = require("./routes/auth");
const ConnectDB = require("./config/db.js");
var session = require("express-session");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const PassportSetup = require("./config/passport-setup");
const passport = require("passport");
const app = express();

//Connecting With DB
ConnectDB();

app.set("view engine", "ejs");

// Creating cookie session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

//initialize passport session
app.use(passport.initialize());
app.use(passport.session());

//Mouting User Route
app.use("/auth", UserRoute);

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost: ${PORT} `);
});
