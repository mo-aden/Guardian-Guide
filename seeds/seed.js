const sequelize = require("../config/connection");
const seedFamily = require("./familyData");
const seedTask = require("./taskData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedFamily();

  await seedTask();

  process.exit(0);
};

seedAll();
