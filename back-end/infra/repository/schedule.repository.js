const ScheduleMapping = require("../mapping/mongo/schedule.mapping");
const mongoose = require("mongoose");
const genericRepository = require("../repository/generic.repository")(
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
