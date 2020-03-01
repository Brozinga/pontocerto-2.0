const mongoose = require("mongoose");

module.exports = Mappings => {
  return {
    async Create(Item) {
      let _mapping = await Mappings.create(Item);
      return _mapping;
    },
    async GetAll() {
      let _mapping = await Mappings.find();
      return _mapping;
    },
    async GetById(Id) {
      let _mapping = await Mappings.findOne({
        _id: mongoose.Types.ObjectId(Id),
        visible: true
      });
      return _mapping;
    },
    async GetWhere(where) {
      let _mapping = await Mappings.find(where);
      return _mapping;
    },
    async Update(Id, Item) {
      let _mapping = await Mappings.update(
        { _id: mongoose.Types.ObjectId(Id), visible: true },
        Item
      );
      return _mapping;
    },
    async DeleteById(Id) {
      let _mapping = await Mappings.deleteOne({
        _id: mongoose.Types.ObjectId(Id)
      });
      return _mapping;
    }
  };
};
