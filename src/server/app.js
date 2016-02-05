'use strict';

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3000;

app.use("/", express.static("./src/client"));
app.use("/", express.static("./"));

app.listen(port, "0.0.0.0", function () {
  console.log("listening to port " + port);
});
