const UserMapping = require("../mapping/mongo/user.mapping");
const genericRepository = require("../repository/generic.repository")(
  UserMapping
);

module.exports = {
  ...genericRepository,

  async GetByIdAndPassword(Id) {
    let _user = await UserMapping.findOne({
      _id: Id,
      visible: true
    }).select("+password");
    return _user;
  },
  async GetByEmail(email) {
    let _user = await UserMapping.findOne({ email: email, visible: true });
    return _user;
  },
  async GetByEmailAddPassword(email) {
    let _user = await UserMapping.findOne({
      email: email,
      visible: true
    }).select("+password");
    return _user;
  }
};
