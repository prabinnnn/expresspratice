const express = require("express");
const indexrouter = require("./router");
const app = express();
app.use(express.json());
app.use("/", indexrouter);
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something missing";
  res.status(500).json({ msg: error });
});
app.listen(8000, () => {
  console.log("app is running");
});
