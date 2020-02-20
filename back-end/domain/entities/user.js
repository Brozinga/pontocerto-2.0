"use strict";

const model = require("@hapi/joi");
const passCrypt = require("../../shared/PasswordHash.js")(10);
const EAcessType = required("../enums/eAcessTypes.js");

const User = model
  .object({
    Id: model.string(),
    Name: model
      .string()
      .min(3)
      .max(30)
      .uppercase()
      .trim()
      .required(),
    Email: model
      .string()
      .email()
      .lowercase()
      .trim()
      .min(6)
      .required(),
    Password: model
      .string()
      .min(6)
      .alphanum()
      .required(),
    IsActive: model.bool().default(true),
    AcessType: model
      .valid(EAcessType.ADMIN, EAcessType.BASICUSER)
      .default(EAcessType.BASICUSER)
      .required(),
    EntryTime: model.date().required(),
    ExitTime: model.date().required(),
    CreatedAt: model.date().default(new Date()),
    UpdatedAt: model.date()
  })
  .options({ abortEarly: false });

User.prototype.CreateUser = ({
  Name,
  Email,
  Password,
  CheckPassword,
  EntryTime,
  ExitTime,
  AcessType,
  IsActive
}) => {
  passCrypt.passwordCompare(Password, CheckPassword);
  Password = passCrypt.createPasswordHash(Password);

  return this.validate({
    Name,
    Email,
    Password,
    IsActive,
    EntryTime,
    ExitTime,
    AcessType
  });
};

module.exports = User;
