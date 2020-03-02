"use strict";

const fs = require("fs");
const http2 = require("spdy");
const path = require("path");

const options = {
  key: fs.readFileSync(
    path.join(__dirname, "..", "certificates", "server.key")
  ),
  cert: fs.readFileSync(
    path.join(__dirname, "..", "certificates", "server.crt")
  )
};

module.exports = (app, port, callback) => {
  http2.createServer(options, app).listen(port, err => {
    if (err) {
      console.error("An error occured", error);
      return;
    }
    callback();
  });
};
