"use strict";

const model = require("@hapi/joi");
const passCrypt = require("../../shared/PasswordHash.js")();
const EAcessType = require("../enums/eAcessTypes.js");

const User = model
  .object({
    Id: model.string(),
    Name: model.string().min(3).uppercase().trim().required(),
    Email: model.string().email().lowercase().trim().required(),
    Password: model.string().min(6).required(),
    CheckPassword: model.ref("Password"),
    IsActive: model.bool().default(true),
    AcessType: model
      .valid(EAcessType.ADMIN, EAcessType.BASICUSER)
      .default(EAcessType.BASICUSER),
    EntryTime: model.date().required(),
    ExitTime: model.date().required(),
    CreatedAt: model.date().default(new Date()),
    UpdatedAt: model.date()
  })
  .with("CheckPassword", "Password")
  .options({ abortEarly: false });

const NewUserObject = (
  Name,
  Email,
  Password,
  CheckPassword,
  EntryTime,
  ExitTime,
  AcessType,
  IsActive
) => {
  let _user = {
    Name: Name,
    Email: Email,
    Password: Password,
    CheckPassword: CheckPassword,
    EntryTime: EntryTime,
    ExitTime: ExitTime,
    AcessType: AcessType,
    IsActive: IsActive
  };

  let validItem = User.validate(_user);

  if (validItem.error) throw validItem.error.details;

  delete validItem.value.CheckPassword;

  validItem.value.Password = passCrypt.createPasswordHash(_user.Password);

  return validItem.value;
};

module.exports = {
  ...User,
  NewUserObject
};
