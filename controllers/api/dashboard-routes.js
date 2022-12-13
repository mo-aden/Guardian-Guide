const router = require("express").Router();

// .com/api/dashboard
router.get("/", async (req, res) => {
  // try {
  //   res.status(200).json(`${req.method} request received`);
  // } catch (err) {
  //   console.log(err);
  // }
});

// router.post("/", async (req, res) => {});

// router.delete("/", async (req, res) => {});

module.exports = router;
