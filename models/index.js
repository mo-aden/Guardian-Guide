const User = require("./User");
const Family = require("./Family");
const Task = require("./Task");

User.hasMany(Family, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Family.belongsTo(User, {
  foreignKey: "user_id",
});

Family.hasMany(Task, {
  foreignKey: "family_id",
  onDelete: "CASCADE",
});

Task.belongsTo(Family, {
  foreignKey: "family_id",
});

module.exports = { User, Family, Task };
