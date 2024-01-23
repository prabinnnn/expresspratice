const express = require("express");
const indexrouter = require("./router");
const app = express();
app.use(express.json());
app.use("/", indexrouter);

app.listen(8000, () => {
  console.log("app is running");
});
