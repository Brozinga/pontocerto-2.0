const response = require("../domain/httpResponses/BasicResponse");
const User = require("../domain/entities/user");
const UserRepository = require("../infra/repository/userRepository");

const _logger = require("../shared/WriteLogger");

module.exports = {
  async CreateUser(Body) {
    try {
      let _user = User.NewUserObject(
        Body.name,
        Body.email,
        Body.password,
        Body.password_verify,
        Body.entry_time,
        Body.exit_time
      );

      if (_user.error) return response(400, _user.error.details, true);

      let userInserted = await UserRepository.CreateUser(_user.value);

      return response(200, userInserted);
    } catch (error) {
      return _logger.logErrors(error);
    }
  }
};
