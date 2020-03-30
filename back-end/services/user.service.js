const response = require("../domain/httpResponses/BasicResponse");
const UserSchema = require("../domain/entities/user");
const UserRepository = require("../infra/repository/user.repository");
const isEmail = require("is-email");

const Service = Repository => {
  return {
    async Create(Body) {
      let _user = UserSchema.NewUserValidation(Body);

      if (_user.error) return response(400, _user.error.details, true);

      let verifyUserById = await Repository.GetByEmail(_user.value.email);

      if (verifyUserById)
        return response(422, "Este email já está cadastrado!", true);

      let userInserted = await Repository.Create(_user.value);

      return response(201, userInserted);
    },


    async Update(Id, Body) {

      let _user = UserSchema.UpdateUserValidation(Body);

      if (_user.error) return response(400, _user.error.details, true);

      let _findUser = await Repository.GetByIdAndPassword(Id);

      if (!_findUser || !Object.keys(_findUser).length) return response(404, "Usuário não encontrado!", true);

      if (Body.email) {
        let verifyEmailUserExists = await Repository.GetByEmail(Body.email);

        if (verifyEmailUserExists)
          return response(422, "Este email já está cadastrado!", true);
      }

      const _userUpdated = await Repository.Update(
        Id,
        Object.assign(_findUser, _user.value)
      );

      return response(200, _userUpdated, false);
    },


    async GetById(Id) {
      const _findUser = await Repository.GetById(Id);

      if (!_findUser || !Object.keys(_findUser).length) return response(404, "Usuário não encontrado!", true);

      return response(200, _findUser, false);
    },


    async GetByEmail(Email) {
      if (!isEmail(Email)) return response(400, "Email incorreto!", true);

      const _findUser = await Repository.GetByEmail(Email);

      if (!_findUser || !Object.keys(_findUser).length) return response(404, "Usuário não encontrado!", true);

      return response(200, _findUser, false);
    },


    async GetAll() {
      const _findUser = await Repository.GetAll();
      if (!_findUser.length)
        return response(404, "Usuários não encontrados", true);
      return response(200, _findUser);
    },


    async UpdatePassword(Id, Password, Checkup) {
      const _findUser = await Repository.GetByIdAndPassword(Id);

      if (!_findUser || !Object.keys(_findUser).length) return response(404, "Usuário não encontrado!", true);

      let _user = UserSchema.UpdatePassword({
        password: Password,
        checkPassword: Checkup
      });

      if (_user.error) return response(400, _user.error.details, true);

      const _userUpdated = await Repository.Update(Id, _user.value);

      return response(200, _userUpdated);
    },

    
    async Delete(Id) {
      const _findUser = await Repository.DeleteById(Id);
      return response(200, _findUser);
    }
  };
};

module.exports = {
  service: Service,
  load: Service(UserRepository)
};
