const { User } = require("../models");

const user1 = {
  username: "smithfam",
  email: "smith@email.com",
  password: "smith123",
};
const user2 = {
  username: "millerfam",
  email: "miller@email.com",
  password: "miller123",
};
const user3 = {
  username: "youngfam",
  email: "young@email.com",
  password: "young123",
};

const seedUser = async () => {
  await User.create(user1);
  await User.create(user2);
  await User.create(user3);
};

module.exports = seedUser;
