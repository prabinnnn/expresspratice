const router = require("express").Router();
router.get("/name", (req, res) => {
  const data1 = req.params.data;
  res.json(`name is ${data1}`);
});
module.exports = router;
