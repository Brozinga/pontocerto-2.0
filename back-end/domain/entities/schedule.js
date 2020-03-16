"use strict";

const model = require("@hapi/joi");

const Schedule = model
  .object({
    _id: model.string(),
    description: model.string().min(3).uppercase().trim().required(),
    userId: model.string().required(),
    entryTime: model.date().required(),
    exitTime: model.date().required(),
    visible: model.boolean().default(true),
    createdAt: model.date().default(new Date()),
    updatedAt: model.date()
  })
  .options({ abortEarly: false });

Schedule.NewScheduleObject = (description, userId, entryTime, exitTime) => {
  let _schedule = {
    description,
    userId,
    entryTime,
    exitTime
  };

  let validItem = Schedule.validate(_schedule);

  return validItem;
};

Schedule.UpdateScheduleObject = UpdateObject => {
  let validItem = Schedule.validate(UpdateObject);

  if (validItem.error) return validItem;

  validItem.value.updatedAt = new Date();

  return validItem;
};

module.exports = Schedule;
