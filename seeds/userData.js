const { User } = require("../models");

const userData = [
  {
    username: "smithfam",
    email: "smith@email.com",
    password: "smith123",
  },
  {
    username: "millerfam",
    email: "miller@email.com",
    password: "miller123",
  },
  {
    username: "youngfam",
    email: "young@email.com",
    password: "young123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
