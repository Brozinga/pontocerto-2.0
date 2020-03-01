const host = require("./host");

const definitions = require("./definitions/definitions");
const user = require("./paths/user");
const schedule = require("./paths/schedule");
const login = require("./paths/login");

module.exports = {
  ...host,
  paths: {
    ...user,
    ...schedule,
    ...login
  },
  ...definitions
};
