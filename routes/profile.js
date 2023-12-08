const express = require("express");
const router = express.Router();
const authCheck = (req, res, next) => {
  console.log(req.userData);
  if (!req.userData) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  console.log(req.user);
  res.render("profile", { user: req.user });
});
module.exports = router;
