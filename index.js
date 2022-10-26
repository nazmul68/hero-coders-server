const express = require("express");
const cors = require("cors");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(favicon(path.join(__dirname, "favicon.ico")));

app.use(cors());
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Hero Coders API is running");
});

app.listen(port, () => {
  console.log("server is running", port);
});
