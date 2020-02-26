const UserController = require("./controllers/userController");
const ScheduleController = require("./controllers/scheduleController");
const express = require("express");

const routes = express.Router();
const version = process.env.VERSION;

routes
  .get(`${version}/users`, UserController.GetAll)
  .get(`${version}/user/:id`, UserController.GetUserById)
  .get(`${version}/user/email/:email`, UserController.GetUserByEmail)
  .post(`${version}/user`, UserController.Post)
  .post(`${version}/user/:id`, UserController.DeleteUserById)
  .put(`${version}/user/password/:id`, UserController.PutPassword)
  .patch(`${version}/user/:id`, UserController.Patch);

routes
  .get(`${version}/schedule/:id`, ScheduleController.GetById)
  .get(`${version}/schedule/user/:userId`, ScheduleController.GetByUserId)
  .post(`${version}/schedule`, ScheduleController.Post)
  .post(`${version}/schedule/:id`, ScheduleController.Delete)
  .patch(`${version}/schedule/:id`, ScheduleController.Patch);

module.exports = routes;
