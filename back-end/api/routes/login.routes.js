const LoginController = require("../controllers/login.controller");

const {LOGIN_URL} = require("./urls");

module.exports = (router) => {
    router.post(LOGIN_URL, LoginController.Post);
}