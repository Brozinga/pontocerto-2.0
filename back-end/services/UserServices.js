const response = require("../domain/httpResponses/BasicResponse");
const User = require("../domain/entities/user");
const UserRepository = require("../infra/repository/UserRepository");

const _logger = require("../shared/WriteLogger");

module.exports = {
  async CreateUser(Body) {
    try {
      let _user = User.NewUserObject(
        "Fernando Brozinga",
        "fernando@fcamara.com.br",
        "Brozinga",
        "Brozinga",
        new Date(),
        new Date()
      );

      if (_user.error) return response(404, _user.error.details, true);

      let userInserted = await UserRepository.CreateUser(_user.value);

      return response(200, userInserted);
    } catch (error) {
      return _logger.logErrors(error);
    }
  }
};
