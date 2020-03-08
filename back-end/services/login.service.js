const Login = require("../domain/entities/login");
const response = require("../domain/httpResponses/BasicResponse");
const UserRepository = require("../infra/repository/user.repository");
const JWT = require("../shared/JWT");
const Service = Repository => {
  return {
    async VerifyUserLogin(email, password) {
      let valid = Login.DataValidate(email, password);
      if (valid.error) return response(400, valid.error.details, true);

      const user = await Repository.GetByEmailAddPassword(valid.value.email);

      if (!user) return response(404, "Usuário não encontrado!", true);

      let validatePasword = Login.ValidatePassword(
        valid.value.password,
        user.password
      );

      if (!validatePasword)
        return response(403, "Usuário ou senha incorretos!", true);

      const token = JWT.GenerateToken(
        { id: user._id, role: user.acessType },
        process.env.JWT_SECRET,
        process.env.JWT_TIME
      );

      return response(200, { token, name: user.name });
    }
  };
};

module.exports = {
  service: Service,
  load: Service(UserRepository)
};
