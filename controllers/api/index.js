const router = require("express").Router();
const userRoutes = require("./dashboard.js");

router.use("/dashboard", userRoutes);

module.exports = router;
