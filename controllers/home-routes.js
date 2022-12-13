const router = require("express").Router();
const { User } = require("../models");

// .com/
// If logged in
router.get("/", (req, res) => {
  // If the user is logged in, redirect to the household dashboard
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  // Stay on page if not
  res.render("/");
});

module.exports = router;
