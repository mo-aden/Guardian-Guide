const router = require("express").Router();
const { User, Family, Task } = require("../models");

// .com/
// If logged in
router.get("/", async (req, res) => {
  // If the user is logged in, redirect to the household dashboard
  if (req.session.loggedIn) {
    res.redirect(`/dashboard/${req.session.user_id}`);
    return;
  }
  // Stay on page if not
  res.render("signup");
});

// .com/dashboard/:id
router.get("/dashboard/:id", async (req, res) => {
  // Find family by user id
  const dbFamilyData = await Family.findAll({
    where: {
      user_id: req.params.id,
    },
    // And their assigned tasks
    include: [
      {
        model: Task,
        attributes: ["name", "category", "description", "due_date"],
      },
    ],
  });

  res.json(dbFamilyData);
});

module.exports = router;
