const UserController = require("../controllers/userController");
const ScheduleController = require("../controllers/scheduleController");
const LoginController = require("../controllers/loginController");
const express = require("express");
const RouterPermissions = require('./permissions');
const _private = express.Router();
const _public = express.Router();
const version = process.env.VERSION;

const {
  USER_URL,
  USER_URL_ID,
  USER_WITH_EMAIL,
  USER_WITH_PASSWORD,
  USERS_URL,

  SCHEDULE_URL,
  SCHEDULE_URL_ID,
  SCHEDULE_WITH_USER,
  LOGIN_URL
} = require ("./constantes.js");


// RouterPermissions(_private);

//BASE
_public.get(`/`, (req, res, next) => {
  
  process.env.NODE_ENV === "development"
    ?  res.redirect(`${version}/api-docs`)
    :  res.json({ status: 200, error: false, message: "API is Running!" });
});




_private
  .get(USERS_URL, UserController.GetAll)
  .get(USER_URL_ID, UserController.GetUserById)
  .get(USER_WITH_EMAIL, UserController.GetUserByEmail)
  .post(USER_URL, UserController.Post)
  .post(USER_URL_ID, UserController.DeleteUserById)
  .patch(USER_WITH_PASSWORD, UserController.PutPassword)
  .patch(USER_URL_ID, UserController.Patch);

_private
  .get(SCHEDULE_URL_ID, ScheduleController.GetById)
  .get(SCHEDULE_WITH_USER, ScheduleController.GetByUserId)
  .post(SCHEDULE_URL, ScheduleController.Post)
  .post(SCHEDULE_URL_ID, ScheduleController.Delete)
  .patch(SCHEDULE_URL_ID, ScheduleController.Patch);

_public.post(LOGIN_URL, LoginController.Post);

module.exports = {
  privates: _private,
  publics: _public
};
