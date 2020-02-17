"use strict";
const path = require("path");

let configurations = process.env.NODE_ENV;

switch (configurations) {
  case "production":
    module.exports = require("dotenv-json")({
      path: path.resolve(__dirname, "production.json")
    });
    break;
  default:
    module.exports = require("dotenv-json")({
      path: path.resolve(__dirname, "development.json")
    });
    break;
}
