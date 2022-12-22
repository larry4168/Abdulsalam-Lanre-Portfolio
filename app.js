const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const logger = require("./logger");

app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", logger, (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("App listening to port http;//localhost:4000.....");
});
