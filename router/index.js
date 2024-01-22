const Router = require("express").Router();
const blog = require("./blog.route");
const categories = require("./categories.route");
const username = require("./username.route");
const roleno = require("./roles.route");
Router.use("/user", username);
Router.use("/role", roleno);
Router.use("/blog", blog);
Router.use("/cat", categories);
Router.get("/", (req, res) => {
  res.json({ msg: "hello from prabin" });
});
Router.get("/:fname/:lname", (req, res) => {
  data = req.params.fname;
  data1 = req.params.lname;
  res.json(`name is ${data} ${data1}`);
});
module.exports = Router;
