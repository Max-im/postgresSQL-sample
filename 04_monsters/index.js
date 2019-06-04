const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/", routes);

// error handler
app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
