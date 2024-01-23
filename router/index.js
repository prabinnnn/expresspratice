const router = require("express").Router();
const blog = require("./blog.route");
const categories = require("./categories.route");
const username = require("./username.route");
const roleno = require("./roles.route");
const person = require("./person.route");
const divison = require("./divide.route");
router.use("/div", divison);
router.use("/user", username);
router.use("/person", person);
router.use("/role", roleno);
router.use("/blog", blog);
router.use("/cat", categories);
router.get("/", (req, res) => {
  res.json({ msg: "hello from prabin" });
});
router.get("/:fname/:lname", (req, res) => {
  data = req.params.fname;
  data1 = req.params.lname;
  res.json(`name is ${data} ${data1}`);
});
module.exports = router;
