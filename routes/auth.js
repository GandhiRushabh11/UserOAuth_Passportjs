const express = require("express");
const router = express.Router();
const passport = require("passport");
//when user click login btn
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

//if user choose google signin
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//Redirect
router.get(
  "/redirect/google",
  passport.authenticate("google", { failureRedirect: "/auth/login" }),
  (req, res) => {
    res.render("profile", { user: req.user });
    //res.redirect("/profile");
  }
);
//if user choose facebook signin
router.get("/facebook", (req, res) => {
  res.send("Your are logged in with Facebook");
});

//logout
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
module.exports = router;
