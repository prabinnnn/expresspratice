const router = require("express").Router();

router.get("/:lname", (req, res) => {
  const data = req.params.lname;
  res.json(`hello from prabin ${data}`);
});

module.exports = router;
