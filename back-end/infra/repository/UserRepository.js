const UserMapping = require("../mapping/mongo/userMapping");
const mongoose = require("mongoose");

module.exports = {
  async CreateUser(User) {
    let _user = await UserMapping.create(User);
    return _user;
  },

  async FindUserById(Id) {
    let _user = await UserMapping.findById(Id);
    return _user;
  },

  async FindUserByEmail(email) {
    let _user = await UserMapping.findOne({ Email: email });
    return _user;
  },

  async UpdateUser(Id, User) {
    let _user = await UserMapping.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(Id) },
      User,
      { new: true }
    );
    return _user;
  }
};
