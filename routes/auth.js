const express = require("express");
const router = express.Router();

//when user click login btn
router.get("/login", (req, res) => {
  res.render("login");
});

//if user choose google signin
router.get("/google", (req, res) => {
  res.send("Your are logged in with Google");
});

//if user choose facebook signin
router.get("/facebook", (req, res) => {
  res.send("Your are logged in with Facebook");
});

//logout
router.get("/logout", (req, res) => {
  res.send("User Logout");
});
module.exports = router;
