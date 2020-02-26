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
  } = require('./constantes');
const Permit = require("../middlewares/Permission");

module.exports = route => {
    route.get([USERS_URL, `${USER_WITH_EMAIL}/:email`], Permit("admin"));
    route.post(
    [USER_URL, `${USER_URL}/:id`, `${SCHEDULE_URL}/:id`],
    Permit("admin")
  );
  route.get([
    `${USER_URL}/:id`,
    `${SCHEDULE_URL}/:id`,
    `${SCHEDULE_WITH_USER}/:userId`,
    Permit("admin", "user")
  ]);
  route.post([SCHEDULE_URL, Permit("admin", "user")]);
  route.patch(
    [`${USER_URL}/:id`, `${USER_WITH_PASSWORD}/:id`, `${SCHEDULE_URL}/:id`],
    Permit("admin", "user")
  );
};
