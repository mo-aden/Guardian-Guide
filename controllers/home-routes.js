const router = require("express").Router();
const { User } = require("../models");

// .com/
// If logged in
router.get("/", (req, res) => {
  // If the user is already logged in, redirect to the household dashboard
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  // Otherwise, render the 'homepage' template
  res.render("/");
});

// When logging in
router.post("/", async (req, res) => {
  try {
    // Find email
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
