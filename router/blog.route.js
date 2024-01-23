const router = require("express").Router();
router.get("/:name", (req, res) => {
  res.json({ msg: "hello from blog" });
});
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
