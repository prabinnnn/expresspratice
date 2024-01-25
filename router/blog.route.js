const router = require("express").Router();
const { numberformatted } = require("../utils/numberformatted");

router.get("/:name", (req, res) => {
  res.json({ msg: "hello from blog" });
});
router.post("/:number", (req, res) => {
  const result = numberformatted(
    req.query.number || req.body.number || req.params.number
  );
  res.json({ msg: result });
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.put("/", (req, res) => {
  console.log(req.query);
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.delete("/", (req, res) => {
  console.log(req.query);
});
router.delete("/", (req, res) => {
  console.log(req.body);
});
router.patch("/", (req, res) => {
  console.log(req.query);
});
router.patch("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
