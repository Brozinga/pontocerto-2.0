"use strict";
const path = require("path");

let configurations = process.env.NODE_ENV;

switch (configurations) {
  case "production":
    module.exports = require("dotenv").config({
      path: path.resolve(__dirname, "production.env")
    });
    break;
  default:
    module.exports = require("dotenv").config({
      path: path.resolve(__dirname, "development.env"),
      debug: true
    });
    break;
}
