const Router = require("express").Router();
Router.get("/:name", (req, res) => {
  res.json({ msg: "hello from blog" });
});
module.exports = Router;
