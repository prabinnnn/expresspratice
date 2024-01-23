const router = require("express").Router();
router.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.json(`the sum is ${sum}`);
});
module.exports = router;
