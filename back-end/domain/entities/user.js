"use strict";

const model = require("@hapi/joi");
const passCrypt = require("../../shared/PasswordHash")();
const EAcessType = require("../enums/eAcessTypes.js");

const CreateUserSchema = model
  .object({
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

const UpdateUserSchema = model
  .object({
    _id: model.string(),
    name: model.string().min(3).uppercase().trim(),
    email: model.string().email().lowercase().trim(),
    password: model.string().min(6),
    checkPassword: model.ref("password"),
    isActive: model.bool(),
    visible: model.bool(),
    acessType: model.valid(EAcessType.ADMIN, EAcessType.BASICUSER),
    entryTime: model.date(),
    exitTime: model.date(),
    createdAt: model.date(),
    updatedAt: model.date().default(new Date())
  })
  .with("checkPassword", "password")
  .options({ abortEarly: false });

const UpdateUserPasswordSchema = model
  .object({
    password: model.string().min(6).required(),
    checkPassword: model.ref("password"),
    updatedAt: model.date().default(new Date())
  })
  .with("checkPassword", "password")
  .options({ abortEarly: false });


module.exports.NewUserValidation = ({ name, email, password, checkPassword, entryTime, exitTime, acessType, isActive }) => {
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

  let validItem = CreateUserSchema.validate(_user);

  if (validItem.error) return validItem;

  delete validItem.value.checkPassword;
  validItem.value.password = passCrypt.createPasswordHash(_user.password);

  return validItem;
}

module.exports.UpdateUserValidation = (UserToUpdate) => {
  let validItem = UpdateUserSchema.validate(UserToUpdate);

  if (validItem.error) return validItem;

  return validItem;
};

module.exports.UpdatePassword = ({ password, checkPassword }) => {
  let validItem = UpdateUserPasswordSchema.validate({
    password,
    checkPassword
  });

  if (validItem.error) return validItem;

  validItem.value.password = passCrypt.createPasswordHash(
    password
  );
  return validItem;
}


