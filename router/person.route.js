const router = require("express").Router();

router.get("/:lname", (req, res) => {
  const data = req.params.lname;
  res.json(`hello from prabin ${data}`);
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
