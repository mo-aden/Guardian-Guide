const router = require("express").Router();

router.get("/", (req, res) => {
  // If the user is already logged in, redirect to the household
  if (req.session.loggedIn) {
    res.redirect("/household");
    return;
  }
  // Otherwise, render the 'homepage' template
  res.render("/");
});

module.exports = router;
