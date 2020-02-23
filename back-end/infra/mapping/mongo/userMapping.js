const mongoose = require("mongoose");

const EAcessType = require("../../../domain/enums/eAcessTypes");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
    upercase: true
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  IsActive: {
    type: Boolean,
    required: true
  },
  AcessType: [
    {
      type: String,
      enum: [EAcessType.ADMIN, EAcessType.BASICUSER]
    }
  ],
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

module.exports = mongoose.model("User", UserSchema);
