const router = require("express").Router();

router.get("/:lname", (req, res) => {
  try {
    const { lname } = req.params;
    const { fname } = req.body;
    if (!lname || !fname) throw new ERROR("lname or fname is missing");
    res.json(`hello from prabin ${data}`);
  } catch (e) {
    next(e);
  }
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
router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name } = re.body;
    if (!id || !name) throw new Error("id or name is missing");
    res.json({ msg: `hello from book id ${id} of book ${name}` });
  } catch (e) {
    next(e);
  }
});
router.patch("/:name", (req, res) => {
  try {
    const { name } = req.params;
    const { id } = req.body;
    if (!name || !name) throw new ERROR("id or name is missing");
    res.json({ msg: `hello from book id ${name} of book name ${id}` });
  } catch (e) {
    next(e);
  }
});
router.delete("/", (req, res) => {
  console.log(req.query);
});
router.delete("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
