const ScheduleMapping = require("../mapping/mongo/scheduleMapping");
const mongoose = require("mongoose");
const genericRepository = require("../repository/genericRepository")(
  ScheduleMapping
);
module.exports = {
  ...genericRepository,

  async GetAllByUserId(UserId) {
    const _schedule = await ScheduleMapping.find({
      userId: mongoose.Types.ObjectId(UserId),
      visible: true
    });

    return _schedule;
  }
};
