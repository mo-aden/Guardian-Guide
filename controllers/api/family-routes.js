const router = require("express").Router();
const { User, Family, Task } = require("../../models");

// .com/api/family
// Add a family member in a user
router.post("/", async (req, res) => {});

// Delete a family member
router.delete("/:id", async (req, res) => {});

module.exports = router;
