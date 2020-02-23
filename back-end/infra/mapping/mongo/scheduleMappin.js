const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
    trim: true
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  EntryTime: {
    type: Date,
    required: true
  },
  ExitTime: {
    type: Date,
    required: true
  },
  CreatedAt: {
    type: Date,
    required: true
  },
  UpdatedAt: {
    type: Date
  }
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
