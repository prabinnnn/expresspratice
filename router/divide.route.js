const router = require("express").Router();
router.get("/a/b", (req, res) => {
  const { a, b } = req.params;
  const div = Number(a) / Number(b);
  res.json(`the division is ${div}`);
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
