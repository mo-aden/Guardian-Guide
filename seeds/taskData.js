const { Task } = require("../models");

const taskData = [
  {
    name: "Mow Lawn",
    category: "Chore",
    description: "Mow the front and back yard.",
    due_date: "2022-12-14T17:00:00Z",
    family_id: 1,
  },
  {
    name: "Vacuum",
    category: "Chore",
    description: "Vacuum floor in the basement.",
    due_date: "2022-12-14T14:00:00Z",
    family_id: 2,
  },
  {
    name: "Pay Electric Bill",
    category: "To-do",
    description: "Submit payment",
    due_date: "2022-12-14T12:00:00Z",
    family_id: 3,
  },
  {
    name: "Dentist Appointment",
    category: "Appointment",
    description: "Teeth cleaning appointment",
    due_date: "2022-12-14T09:00:00Z",
    family_id: 4,
  },
  {
    name: "Basketball Game",
    category: "Event",
    description: "Youth basketball game",
    due_date: "2022-12-15T19:00:00Z",
    family_id: 5,
  },
  {
    name: "Take out trash",
    category: "Chore",
    description: "Take out the trash for pickup",
    due_date: "2022-12-15T08:00:00Z",
    family_id: 6,
  },
  {
    name: "Homework",
    category: "To-do",
    description: "Complete math homework",
    due_date: "2022-12-14T21:00:00Z",
    family_id: 7,
  },
  {
    name: "Pay rent",
    category: "To-do",
    description: "Submit monthly payment for rent",
    due_date: "2022-12-15T23:00:00Z",
    family_id: 8,
  },
  {
    name: "School Play",
    category: "Event",
    description: "Middle School winter play",
    due_date: "2022-12-16T19:00:00Z",
    family_id: 9,
  },
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;
