const router = require("express").Router();
router.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.json(`the sum is ${sum}`);
});
router.post("/", (req, res) => {
  console.log(req.query);
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.put("/", (req, res) => {
  console.log(req.query);
});
router.put("/", (req, res) => {
  console.log(req.body);
});
router.patch("/", (req, res) => {
  console.log(req.query);
});
router.patch("/", (req, res) => {
  console.log(req.body);
});
router.delete("/", (req, res) => {
  console.log(req.query);
});
router.delete("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
