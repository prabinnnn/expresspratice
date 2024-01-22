const Router = require("express").Router();
Router.get("/name", (req, res) => {
  const data1 = req.params.data;
  res.json(`name is ${data1}`);
});
module.exports = Router;
