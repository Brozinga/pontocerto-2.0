const UserController = require("./controllers/userController");
const ScheduleController = require("./controllers/scheduleController");
const LoginController = require("./controllers/loginController");
const express = require("express");
const Permit = require("./middlewares/Permission");

const _private = express.Router();
const _public = express.Router();

const version = process.env.VERSION;

//USER
const USER_URL = `${version}/user`;
const USER_WITH_EMAIL = `${version}/user/email`;
const USER_WITH_PASSWORD = `${version}/user/password`;
const USERS_URL = `${version}/users`;
//SCHEDULE
const SCHEDULE_URL = `${version}/schedule`;
const SCHEDULE_WITH_USER = `${version}/schedule/user`;
//LOGIN
const LOGIN_URL = `${version}/login`;

_public.get(`/`, (req, res, next) => {
  process.env.NODE_ENV === "development"
    ? res.redirect(`${version}/api-docs`)
    : res.json({ status: 200, error: false, message: "API is Running!" });
});

_private.get([USERS_URL, `${USER_WITH_EMAIL}/:email`], Permit("admin"));
_private.post(
  [USER_URL, `${USER_URL}/:id`, `${SCHEDULE_URL}/:id`],
  Permit("admin")
);
_private.get([
  `${USER_URL}/:id`,
  `${SCHEDULE_URL}/:id`,
  `${SCHEDULE_WITH_USER}/:userId`,
  Permit("admin", "user")
]);
_private.post([SCHEDULE_URL, Permit("admin", "user")]);
_private.patch(
  [`${USER_URL}/:id`, `${USER_WITH_PASSWORD}/:id`, `${SCHEDULE_URL}/:id`],
  Permit("admin", "user")
);

_private
  .get(`${USERS_URL}`, UserController.GetAll)
  .get(`${USER_URL}/:id`, UserController.GetUserById)
  .get(`${USER_WITH_EMAIL}/:email`, UserController.GetUserByEmail)
  .post(`${USER_URL}`, UserController.Post)
  .post(`${USER_URL}/:id`, UserController.DeleteUserById)
  .patch(`${USER_WITH_PASSWORD}/:id`, UserController.PutPassword)
  .patch(`${USER_URL}/:id`, UserController.Patch);

_private
  .get(`${SCHEDULE_URL}/:id`, ScheduleController.GetById)
  .get(`${SCHEDULE_WITH_USER}/:userId`, ScheduleController.GetByUserId)
  .post(`${SCHEDULE_URL}`, ScheduleController.Post)
  .post(`${SCHEDULE_URL}/:id`, ScheduleController.Delete)
  .patch(`${SCHEDULE_URL}/:id`, ScheduleController.Patch);

_public.post(`${LOGIN_URL}`, LoginController.Post);

module.exports = {
  privates: _private,
  publics: _public
};
