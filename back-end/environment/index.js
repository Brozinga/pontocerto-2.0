"use strict";
const path = require("path");
const parseVariables = require("dotenv-parse-variables");
let env;
let result;

let configurations = process.env.NODE_ENV;

switch (configurations) {
  case "production":
    env = require("dotenv").config({
      path: path.resolve(__dirname, "production.env")
    });
    result = parseVariables(env.parsed);
    process.env = { ...result, NODE_ENV: configurations };
    module.exports = result;

    break;

  default:
    env = require("dotenv").config({
      path: path.resolve(__dirname, "development.env")
    });
    result = parseVariables(env.parsed);
    process.env = { ...result, NODE_ENV: configurations };
    module.exports = result;
    break;
}
