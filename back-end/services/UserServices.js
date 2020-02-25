const response = require("../domain/httpResponses/BasicResponse");
const User = require("../domain/entities/user");
const UserRepository = require("../infra/repository/userRepository");
const isEmail = require("is-email");

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
      _user.value.email
    );

    if (verifyUserById)
      return response(422, "Este email já está cadastrado!", true);

    let userInserted = await UserRepository.CreateUser(_user.value);

    return response(201, userInserted);
  },
  async UpdateUser(Id, Body) {
    let _findUser = await UserRepository.FindUserByIdAndPassword(Id);

    if (!_findUser) return response(404, "Usuário não encontrado!", true);

    if (Body.email) {
      let verifyEmailUserExists = await UserRepository.FindUserByEmail(
        Body.email
      );

      if (verifyEmailUserExists)
        return response(422, "Este email já está cadastrado!", true);
    }

    let userToUpdated = Object.assign(_findUser._doc, Body);

    let validation = { ...userToUpdated };

    delete validation.__v;
    delete validation._id;

    let _user = User.UpdateUser(validation);

    if (_user.error) return response(400, _user.error.details, true);

    const _userUpdated = await UserRepository.UpdateUser(
      Id,
      Object.assign(_findUser, _user.value)
    );

    return response(200, _userUpdated, false);
  },
  async GetUserById(Id) {
    const _findUser = await UserRepository.FindUserById(Id);

    if (!_findUser) return response(404, "Usuário não encontrado!", true);

    return response(200, _findUser, false);
  },
  async GetUserByEmail(Email) {
    if (!isEmail(Email)) return response(400, "Email incorreto!", true);

    const _findUser = await UserRepository.FindUserByEmail(Email);

    if (!_findUser) return response(404, "Usuário não encontrado!", true);

    return response(200, _findUser, false);
  },
  async GetAllUsers() {
    const _findUser = await UserRepository.FindAll();
    return response(200, _findUser);
  },
  async UpdatePassword(Id, Password, Checkup) {
    const _findUser = await UserRepository.FindUserByIdAndPassword(Id);

    if (!_findUser) return response(404, "Usuário não encontrado!", true);

    let userToUpdated = Object.assign(_findUser._doc, {
      password: Password,
      checkPassword: Checkup
    });

    let validation = { ...userToUpdated };

    delete validation.__v;
    delete validation._id;

    let _user = User.UpdatePassword(validation);

    if (_user.error) return response(400, _user.error.details, true);

    const _userUpdated = await UserRepository.UpdateUser(
      Id,
      Object.assign(_findUser, _user.value)
    );

    return response(200, _userUpdated);
  },
  async DeleteUserById(Id) {
    const _findUser = await UserRepository.DeleteUserById(Id);
    return response(200, _findUser);
  }
};
