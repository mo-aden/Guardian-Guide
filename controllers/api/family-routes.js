const router = require("express").Router();
const { User, Family, Task } = require("../../models");

// .com/api/family
// Add a family member in a user
router.post("/:id", async (req, res) => {
  try {
    // Create new member
    const dbFamilyData = await Family.create({
      name: req.body.name,
      user_id: req.params.id,
    });
    res.status(200).json(dbFamilyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a family member
router.delete("/:id", async (req, res) => {
  try {
    const familyData = await Family.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!familyData) {
      res.status(404).json({ message: "No family member with is id" });
      return;
    }

    res.status(200).json(familyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
