const controller = require("./controllers/userController");
const express = require("express");

const routes = express.Router();
const version = process.env.VERSION;

routes
  .get(`${version}/users`, controller.GetAllController)
  .post(`${version}/user`, controller.CreateUserController)
  .post(`${version}/user/:id`, controller.DeleteUserByIdController)
  .put(`${version}/user/password/:id`, controller.UpdatePasswordController)
  .get(`${version}/user/:id`, controller.GetUserByIdController)
  .get(`${version}/user/email/:email`, controller.GetUserByEmailController)
  .patch(`${version}/user/:id`, controller.UpdateUserController);

module.exports = routes;
