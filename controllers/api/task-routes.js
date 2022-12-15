const router = require("express").Router();
const { User, Family, Task } = require("../../models");

// .com/api/tasks
// Add a task, assigned to family member
router.post("/", async (req, res) => {
  try {
    // Create new task
    const dbTaskData = await Task.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      due_date: req.body.due_date,
      family_id: req.body.family_id,
    });
    res.status(200).json(dbTaskData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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
