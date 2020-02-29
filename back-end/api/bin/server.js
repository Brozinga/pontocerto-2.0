"use strict";

require("../env");
require("../../infra/context/mongodb");
const express = require("express"),
  cors = require("cors"),
  compression = require("compression"),
  logger = require("morgan"),
  helmet = require("helmet"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../documentation/swagger.json"),
  loggerFile = require("../../shared/WriteLogger"),
  requestIp = require("request-ip");

require("express-async-errors");

const version = process.env.VERSION;
const app = express();

app.use(require("express-status-monitor")());
app.use(requestIp.mw());
app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "UPDATE", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);

console.log(process.env.VERSION);
app.use(logger("dev"));
app.use(compression());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  `${version}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(require("../routes").privates);
app.use(require("../routes").publics);

//ERROR HANDLER -- TRATAR TODOS OS ERROS DO AP
app.use(async (err, req, res, next) => {
  const errorLog = loggerFile.logErrors(err, 500, req);
  console.log(err);
  res.status(errorLog.status).json(errorLog);
});

module.exports = app;
