"use strict";

const model = require("@hapi/joi");

const User = model
  .object({
    Id: model.string(),
    Name: model
      .string()
      .uppercase()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    Email: model
      .string()
      .email()
      .lowercase()
      .required(),
    EntryTime: model.date(),
    ExitTime: model.date()
  })
  .options({ abortEarly: false });

module.exports = User;
