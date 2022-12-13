const { Task } = require("../models");

const taskData = [
  {
    name: "Mow Lawn",
    category: "Chore",
    description: "Mow the front and back yard.",
    due_date: "2022-12-13 10:00:00",
    family_id: 1,
  },
  {
    name: "Vacuum",
    category: "Chore",
    description: "Vacuum floor in the basement.",
    due_date: "2022-12-13 10:00:00",
    family_id: 2,
  },
  {
    name: "Pay Electric Bill",
    category: "To-do",
    description: "Submit payment",
    due_date: "2022-12-13 10:00:00",
    family_id: 3,
  },
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;
