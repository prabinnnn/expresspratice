const router = require("express").Router();
router.get("/name", (req, res) => {
  const data = req.params.data;
  res.json(`name is ${data}`);
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
