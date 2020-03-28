const version = process.env.VERSION;

module.exports = {
  USER_URL: `${version}/user`,
  USER_URL_ID: `${version}/user/:id`,
  USER_WITH_EMAIL: `${version}/user/email/:email`,
  USER_WITH_PASSWORD: `${version}/user/password/:id`,
  USERS_URL: `${version}/users`,

  SCHEDULE_URL: `${version}/schedule`,
  SCHEDULE_URL_ID: `${version}/schedule/:id`,
  SCHEDULE_WITH_USER: `${version}/schedule/user/:userId`,
  LOGIN_URL: `${version}/login`
};
