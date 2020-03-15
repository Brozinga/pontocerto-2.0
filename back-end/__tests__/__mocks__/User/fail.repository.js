module.exports = {
  async GetByEmailAddPassword(email) {
    let _user = null;
    return _user;
  },

  async GetByIdAndPassword(Id) {
    return {};
  },

  async GetAll() {
    let _users = [
    ]

    return _users;
  },

  async GetByEmail(email) {
    return {
      "_id": "5e6e63e77857a23ec4192779",
      "name": "TESTE",
      "email": "testando@email.com",
      "entryTime": "2020-03-15T14:09:00.311-03:00",
      "exitTime": "2020-03-15T14:09:00.311-03:00",
      "acessType": "user",
      "isActive": true,
      "visible": true,
      "createdAt": "2020-03-15T14:19:34.357-03:00",
      "__v": 0,
      "updatedAt": "2020-03-15T14:19:34.386-03:00"
  }
  },

  async GetById(id) {
    return {};
  },

  async Create(user) {
    let _user = null

    return _user;
  },

};
