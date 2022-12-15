const router = require("express").Router();
const { User, Family, Task } = require("../../models");

// .com/api/tasks
// Add a task, assigned to family member
router.post("/", async (req, res) => {});

// Delete a task
router.delete("/:id", async (req, res) => {});

module.exports = router;
