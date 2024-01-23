const router = require("express").Router();
router.get("/:name", (req, res) => {
  res.json({ msg: "hello from blog" });
});
module.exports = router;
