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
      Body.checkPassword,
      Body.entryTime,
      Body.exitTime,
      Body.acessType,
      Body.isActive
    );

    if (_user.error) return response(400, _user.error.details, true);

    let verifyUserById = await UserRepository.FindUserByEmail(
      _user.value.Email
    );

    if (verifyUserById)
      return response(422, "Este email já está cadastrado!", true);

    let userInserted = await UserRepository.CreateUser(_user.value);

    return response(200, userInserted);
  },

  async UpdateUser(Id, Body) {
    let _findUser = await UserRepository.FindUserById(Id);

    if (!_findUser) return response(404, "Usuário não encontrado!", true);

    let userToUpdated = Object.assign(_findUser, Body);

    let validation = { ...userToUpdated };

    delete validation._doc.__v;
    delete validation._doc._id;

    validation._doc.acessType = validation._doc.acessType[0];

    let _user = User.validate(userToUpdated._doc);

    if (_user.error) return response(400, _user.error.details, true);

    _user.value.updatedAt = new Date();

    const _userUpdated = await UserRepository.UpdateUser(
      Id,
      Object.assign(_findUser, _user.value)
    );

    return response(200, _userUpdated, false);
  },

  async GetUserById(Id) {},

  async GetAllUsers() {},

  async DeleteUserById() {}
};
