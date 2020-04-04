"use strict";

require("../../environment");
require("../../infra/context/mongodb");
const express = require("express"),
  cors = require("cors"),
  compression = require("compression"),
  logger = require("../middlewares/MorganLog"),
  helmet = require("helmet"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../documentation/swagger.js"),
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

app.use(compression());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
logger(app, process.env.MORGAN_LOG);

app.use(
  `${version}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

require('../middlewares/SwaggerUrlEnabled')(app);

app.use(require("../routes"));

require('../middlewares/RouteNotFound')(app);


//ERROR HANDLER -- TRATAR TODOS OS ERROS DO AP
app.use(async (err, req, res, next) => {
  const errorLog = loggerFile.logErrors(err, 500, req);
  console.log(err);
  res.status(errorLog.status).json(errorLog);
});

module.exports = app;
