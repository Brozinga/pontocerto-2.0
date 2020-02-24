const response = require("../domain/httpResponses/BasicResponse");
const User = require("../domain/entities/user");
const UserRepository = require("../infra/repository/userRepository");

const _logger = require("../shared/WriteLogger");

module.exports = {
  async CreateUser(Body) {
    let _user = User.NewUserObject(
      Body.name,
      Body.email,
      Body.password,
      Body.password_verify,
      Body.entry_time,
      Body.exit_time,
      Body.acess_type,
      Body.is_active
    );

    if (_user.error) return response(400, _user.error.details, true);

    let verifyUserById = await UserRepository.FindUserByEmail(
      _user.value.Email
    );

    if (verifyUserById)
      return response(422, "Este email já está cadastrado!", true);

    let userInserted = await UserRepository.CreateUser(_user.value);

    return response(200, userInserted);
  }
};
