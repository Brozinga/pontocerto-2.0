"use strict";

const appRoot = require("app-root-path");
const winston = require("winston");
const moment = require("moment");

const options = {
  file: {
    level: "error",
    filename: `${appRoot}/logs/erros_${moment.utc().format("YYYY-MM-DD")}.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "error",
    handleExceptions: true,
    json: true,
    colorize: true
  }
};

let logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
});

logger.stream = {
  write: function(message, encoding) {
    logger.error(message);
  }
};

module.exports = logger;
