const response = require("../domain/httpResponses/BasicResponse");
const User = require("../domain/entities/user");
const UserRepository = require("../infra/repository/userRepository");
const isEmail = require("is-email");

const Service = Repository => {
  return {
    async Create(Body) {
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

      let verifyUserById = await UserRepository.GetByEmail(_user.value.email);

      if (verifyUserById)
        return response(422, "Este email já está cadastrado!", true);

      let userInserted = await UserRepository.Create(_user.value);

      return response(201, userInserted);
    },
    async Update(Id, Body) {
      let _findUser = await UserRepository.GetByIdAndPassword(Id);

      if (!_findUser) return response(404, "Usuário não encontrado!", true);

      if (Body.email) {
        let verifyEmailUserExists = await UserRepository.GetByEmail(Body.email);

        if (verifyEmailUserExists)
          return response(422, "Este email já está cadastrado!", true);
      }

      let userToUpdated = Object.assign(_findUser._doc, Body);

      let validation = { ...userToUpdated };

      delete validation.__v;
      delete validation._id;

      let _user = User.UpdateUserObject(validation);

      if (_user.error) return response(400, _user.error.details, true);

      const _userUpdated = await UserRepository.Update(
        Id,
        Object.assign(_findUser, _user.value)
      );

      return response(200, _userUpdated, false);
    },
    async GetById(Id) {
      const _findUser = await UserRepository.GetById(Id);

      if (!_findUser) return response(404, "Usuário não encontrado!", true);

      return response(200, _findUser, false);
    },
    async GetByEmail(Email) {
      if (!isEmail(Email)) return response(400, "Email incorreto!", true);

      const _findUser = await UserRepository.GetByEmail(Email);

      if (!_findUser) return response(404, "Usuário não encontrado!", true);

      return response(200, _findUser, false);
    },
    async GetAll() {
      const _findUser = await UserRepository.GetAll();
      return response(200, _findUser);
    },
    async UpdatePassword(Id, Password, Checkup) {
      const _findUser = await UserRepository.GetByIdAndPassword(Id);

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

      const _userUpdated = await UserRepository.Update(
        Id,
        Object.assign(_findUser, _user.value)
      );

      return response(200, _userUpdated);
    },
    async Delete(Id) {
      const _findUser = await UserRepository.DeleteById(Id);
      return response(200, _findUser);
    }
  };
};

module.exports = {
  ServiceTest: Service,
  Service: Service(UserRepository)
};
