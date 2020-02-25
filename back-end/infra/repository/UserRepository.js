const UserMapping = require("../mapping/mongo/userMapping");
const mongoose = require("mongoose");

module.exports = {
  async CreateUser(User) {
    let _user = await UserMapping.create(User);
    return _user;
  },

  async FindUserById(Id) {
    let _user = await UserMapping.findOne({
      _id: Id,
      visible: true
    });
    return _user;
  },

  async FindUserByIdAndPassword(Id) {
    let _user = await UserMapping.findOne({
      _id: Id,
      visible: true
    }).select("+password");
    return _user;
  },

  async FindUserByEmail(email) {
    let _user = await UserMapping.findOne({ email: email, visible: true });
    return _user;
  },

  async UpdateUser(Id, User) {
    let _user = await UserMapping.update({ _id: Id, visible: true }, User);
    return _user;
  },

  async FindAll() {
    let _user = await UserMapping.find();
    return _user;
  },

  async SoftDeleteUserById(id) {
    let _user = await UserMapping.update(
      { _id: id, visible: true },
      { visible: false }
    );
    return _user;
  },

  async DeleteUserById(id) {
    let _user = await UserMapping.deleteOne({ _id: id });
    return _user;
  }
};
