const router = require("express").Router();
const userRoutes = require("./household.js");

router.use("/household", userRoutes);

module.exports = router;
