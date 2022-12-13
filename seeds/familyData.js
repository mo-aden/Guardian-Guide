const { Family } = require("../models");

const familyData = [
  {
    name: "John Smith",
    user_id: 1,
  },
  {
    name: "Jane Smith",
    user_id: 1,
  },
  {
    name: "Sarah Smith",
    user_id: 1,
  },
  {
    name: "Ben Miller",
    user_id: 2,
  },
  {
    name: "Greg Miller",
    user_id: 2,
  },
  {
    name: "Lisa Miller",
    user_id: 2,
  },
  {
    name: "Steve Young",
    user_id: 3,
  },
  {
    name: "Bryce Young",
    user_id: 3,
  },
  {
    name: "Linda Young",
    user_id: 3,
  },
];

const seedFamily = () => Family.bulkCreate(familyData);

module.exports = seedFamily;
