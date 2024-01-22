const Router = require("express").Router();
Router.get("/name", (req, res) => {
  const data = req.params.data;
  res.json(`name is ${data}`);
});
module.exports = Router;
