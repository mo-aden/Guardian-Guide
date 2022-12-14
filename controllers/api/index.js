const router = require("express").Router();
const userRoutes = require("./user-routes");
const familyRoutes = require("./family-routes");
const taskRoutes = require("./task-routes");

// .com/api
router.use("/users", userRoutes);
router.use("/family", familyRoutes);
router.use("/task", taskRoutes);

module.exports = router;
