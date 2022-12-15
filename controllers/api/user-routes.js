const router = require("express").Router();
const { User } = require("../../models");

// .com/api/users
// When logging in
router.post("/login", async (req, res) => {
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
    // Check password on row containing email
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    // Give user set "loggedIn" to true

    req.session.save(() => {
      req.session.loggedIn = true;
    });

    res
      .status(200)
      .json({ user: dbUserData, message: "You are now logged in!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//When logging out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// When making a new account
router.post("/", async (req, res) => {
  try {
    // Create new user
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Add 'loggedIn' variable set to 'true'
    // Add user_id to grab for url
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.dataValues.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const dbUserData = await User.findAll();

  res.status(200).json(dbUserData);
});

module.exports = router;
