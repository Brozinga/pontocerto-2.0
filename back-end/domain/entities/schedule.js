"use strict";

const model = require("@hapi/joi");

const Schedule = model
  .object({
    Id: model.string(),
    Description: model.string().min(3).max(30).uppercase().trim().required(),
    UserId: model.string().required(),
    EntryTime: model.date().required(),
    ExitTime: model.date().required(),
    CreatedAt: model.date().default(new Date()),
    UpdatedAt: model.date()
  })
  .options({ abortEarly: false });

const NewScheduleObject = (Description, UserId, EntryTime, ExitTime) => {
  let _schedule = {
    Description,
    UserId,
    EntryTime,
    ExitTime
  };

  let validItem = Schedule.validate(_schedule);

  // if (validItem.error) throw validItem.error.details;

  return validItem;
};

module.exports = {
  ...Schedule,
  NewScheduleObject
};
