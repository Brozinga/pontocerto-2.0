"use strict";

require("../env");
require("../../infra/context/mongodb");

const express = require("express"),
  cors = require("cors"),
  compression = require("compression"),
  logger = require("morgan"),
  helmet = require("helmet"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../documentation/swagger.json");

const app = express();

app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "UPDATE", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);

app.use(logger("dev"));
app.use(compression());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const router = require("express").Router();
router.get("/", (req, res) => {
  const User = require("../../domain/entities/user");

  try {
    let _user = User.NewUserObject(
      "",
      "fernandofcamara.com.br",
      "Brozinga",
      "Brozinga",
      new Date(),
      new Date()
    );

    res.json(_user);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.use(router);

module.exports = app;
