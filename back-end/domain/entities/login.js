"use strict";

const model = require("@hapi/joi");
const passCrypt = require("../../shared/PasswordHash")();

const Login = model
  .object({
    email: model.string().email().lowercase().trim().required(),
    password: model.string().min(6).required()
  })
  .options({ abortEarly: false });

Login.ValidatePassword = (Password, CryptPassword) => {
  return passCrypt.comparePasswordHash(Password, CryptPassword);
};

Login.DataValidate = (User, Password) => {
  let validItem = Login.validate({ email: User, password: Password });
  return validItem;
};

module.exports = Login;
