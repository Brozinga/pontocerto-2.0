"use strict";

const appRoot = require("app-root-path");
const winston = require("winston");
const moment = require("moment");

module.exports = _options => {
  const options = {
    file: {
      level: "error",
      filename: `${appRoot}/${_options.location}/erros_${moment
        .utc()
        .format("YYYY-MM-DD")}.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    },
    console: {
      level: "error",
      handleExceptions: true,
      json: true,
      colorize: true
    }
  }; // 5MB

  let logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false
  });

  logger.stream = {
    write: async function(message, encoding) {
      logger.error(message);
    }
  };

  return logger;
};
