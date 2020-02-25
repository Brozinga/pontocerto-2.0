"use strict";

const model = require("@hapi/joi");
const passCrypt = require("../../shared/PasswordHash")();
const EAcessType = require("../enums/eAcessTypes.js");

const User = model
  .object({
    _id: model.string(),
    name: model.string().min(3).uppercase().trim().required(),
    email: model.string().email().lowercase().trim().required(),
    password: model.string().min(6).required(),
    checkPassword: model.ref("password"),
    isActive: model.bool().default(true),
    visible: model.bool().default(true),
    acessType: model
      .valid(EAcessType.ADMIN, EAcessType.BASICUSER)
      .default(EAcessType.BASICUSER),
    entryTime: model.date().required(),
    exitTime: model.date().required(),
    createdAt: model.date().default(new Date()),
    updatedAt: model.date()
  })
  .with("checkPassword", "password")
  .options({ abortEarly: false });

User.NewUserObject = (
  name,
  email,
  password,
  checkPassword,
  entryTime,
  exitTime,
  acessType,
  isActive
) => {
  let _user = {
    name,
    email,
    password,
    checkPassword,
    entryTime,
    exitTime,
    acessType,
    isActive
  };

  let validItem = User.validate(_user);

  if (validItem.error) return validItem;

  delete validItem.value.checkPassword;
  validItem.value.password = passCrypt.createPasswordHash(_user.password);

  return validItem;
};

User.UpdateUser = UserToUpdate => {
  let validItem = User.validate(UserToUpdate);

  if (validItem.error) return validItem;

  delete validItem.value.password;
  validItem.value.updatedAt = new Date();

  return validItem;
};

User.UpdatePassword = UserPassword => {
  let validItem = User.validate(UserPassword);

  if (validItem.error) return validItem;

  validItem.value.password = passCrypt.createPasswordHash(
    UserPassword.password
  );
  validItem.value.updatedAt = new Date();

  return validItem;
};

module.exports = User;
