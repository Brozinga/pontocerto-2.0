"use strict";

const model = require("@hapi/joi");

const Schedule = model
  .object({
    _id: model.string(),
    description: model.string().min(3).max(30).uppercase().trim().required(),
    userId: model.string().required(),
    entryTime: model.date().required(),
    exitTime: model.date().required(),
    createdAt: model.date().default(new Date()),
    updatedAt: model.date()
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
