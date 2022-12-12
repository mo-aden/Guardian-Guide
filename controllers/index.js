const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const householdRoutes = require("./api/household");

router.use("/", homeRoutes);
router.use("/household", householdRoutes);

module.exports = router;
