const controller = require("./controllers/userController");
const express = require("express");

const routes = express.Router();
const version = process.env.VESION;
routes.post(`${version}/user`, controller.UserCreateController);

module.exports = routes;
