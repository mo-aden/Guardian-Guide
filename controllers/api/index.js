const router = require("express").Router();
const dashboardRoutes = require("./dashboard-routes.js");
const userRoutes = require("./user-routes");

// .com/api
router.use("/dashboard", dashboardRoutes);
router.use("/users", userRoutes);

module.exports = router;
