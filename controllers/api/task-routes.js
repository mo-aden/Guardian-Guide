const router = require("express").Router();
const { User, Family, Task } = require("../../models");

// .com/api/tasks
// Add a task, assigned to family member
router.post("/", async (req, res) => {});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: "No task with is id" });
      return;
    }

    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
