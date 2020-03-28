const LoginController = require("../controllers/login.controller");

const {LOGIN_URL} = require("./constants");

module.exports = (router) => {
    router.post(LOGIN_URL, LoginController.Post);
}