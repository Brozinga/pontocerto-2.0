const Permit = require("../middlewares/Permission");
const UserController = require("../controllers/user.controller");

const {
    USER_URL,
    USER_URL_ID,
    USER_WITH_EMAIL,
    USER_WITH_PASSWORD,
    USERS_URL
  } = require("./constants");

  module.exports = (router) => {

//PERMISSIONS
  router.get([USERS_URL, USER_WITH_EMAIL], Permit("admin"));
  router.post([USER_URL, USER_URL_ID], Permit("admin"));
  router.get([USER_URL_ID], Permit("admin", "user"));
  router.patch([USER_URL_ID, USER_WITH_PASSWORD], Permit("admin", "user"));

// ROUTES
  router
  .get(USERS_URL, UserController.GetAll)
  .get(USER_URL_ID, UserController.GetUserById)
  .get(USER_WITH_EMAIL, UserController.GetUserByEmail)
  .post(USER_URL, UserController.Post)
  .post(USER_URL_ID, UserController.DeleteUserById)
  .patch(USER_WITH_PASSWORD, UserController.PutPassword)
  .patch(USER_URL_ID, UserController.Patch);

}