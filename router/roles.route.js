const router = require("express").Router();
router.get("/name", (req, res) => {
  const data = req.params.data;
  res.json(`name is ${data}`);
});
module.exports = router;
