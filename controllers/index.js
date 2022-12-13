const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const householdRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", householdRoutes);

module.exports = router;
