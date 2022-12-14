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
  res.render("homepage");
});

router.get("/signup", async (req, res) => {
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
        attributes: [
          "name",
          "category",
          "description",
          "due_date",
          "family_id",
        ],
      },
    ],
  });

  const family_icons = [];
  const family_member = [];
  dbFamilyData.forEach((el) => {
    const obj = {
      member_name: el.dataValues.name,
    };
    family_icons.push(obj);
  });

  dbFamilyData.forEach((el) => {
    if (el.dataValues.tasks.length <= 1) {
      const obj = {
        member_name: el.dataValues.name,
        id: el.dataValues.id,
        task_name: el.dataValues.tasks[0].dataValues.name,
        category: el.dataValues.tasks[0].dataValues.category,
        description: el.dataValues.tasks[0].dataValues.description,
        due_date: el.dataValues.tasks[0].dataValues.due_date,
      };
      family_member.push(obj);
    } else {
      for (let i = 0; i < el.dataValues.tasks.length; i++) {
        const obj2 = {
          member_name: el.dataValues.name,
          id: el.dataValues.id,
          task_name: el.dataValues.tasks[i].dataValues.name,
          category: el.dataValues.tasks[i].dataValues.category,
          description: el.dataValues.tasks[i].dataValues.description,
          due_date: el.dataValues.tasks[i].dataValues.due_date,
        };
        family_member.push(obj2);
      }
    }
  });

  const id = {
    user_id: req.params.id,
  };

  res.render("dashboard", { family_member, family_icons, id });
});

router.get("/dashboard/:id/new", async (req, res) => {
  const dbFamilyData = await Family.findAll({
    where: {
      user_id: req.params.id,
    },
  });

  const family_member = [];
  dbFamilyData.forEach((el) => {
    const obj = {
      name: el.name,
      id: el.id,
    };
    family_member.push(obj);
  });

  res.render("new", { family_member });
});

module.exports = router;
