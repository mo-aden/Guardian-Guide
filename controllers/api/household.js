const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json(`${req.method} request received`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
