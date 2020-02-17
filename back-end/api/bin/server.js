"use strict";

require("../env");

require("../../infra/context/mongodb");

const express = require("express"),
  cors = require("cors"),
  compression = require("compression"),
  logger = require("morgan"),
  helmet = require("helmet");

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

const router = require("express").Router();
router.get("/", (req, res) => {
  res.json("Testando a API");
});

app.use(router);

module.exports = app;
