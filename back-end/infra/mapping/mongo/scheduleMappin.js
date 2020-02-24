const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  entryTime: {
    type: Date,
    required: true
  },
  exitTime: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date
  }
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
