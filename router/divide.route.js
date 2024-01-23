const router = require("express").Router();
router.get("/a/b", (req, res) => {
  const { a, b } = req.params;
  const div = Number(a) / Number(b);
  res.json(`the division is ${div}`);
});

module.exports = router;
