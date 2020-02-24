const controller = require("./controllers/userController");
const express = require("express");

const routes = express.Router();
const version = process.env.VERSION;

routes
  .get(`${version}/user`, controller.UserCreateController)
  .post(`${version}/user`, controller.UserCreateController)
  .get(`${version}/user/:id`, controller.UserCreateController)
  .patch(`${version}/user/:id`, controller.UserUpdateController);

module.exports = routes;
