const router = require("express").Router();
const userRoutes = require("./dashboard.js");

// .com/api
router.use("/dashboard", userRoutes);

module.exports = router;
