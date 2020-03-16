module.exports = {
  async GetByEmailAddPassword(email) {
    let _user = null;
    return _user;
  },

  async GetByIdAndPassword(Id) {
    return {
      "_id": "5e6e63e77857a23ec4192779",
      "name": "TESTE",
      "email": "testando@email.com",
      "password": "$2b$10$8VeDCxXxLh.X9xMF7G1t.uEoHcwIb4uw50pvquWwruID3FntXRR6u",
      "entryTime": "2020-03-15T14:09:00.311-03:00",
      "exitTime": "2020-03-15T14:09:00.311-03:00",
      "acessType": "user",
      "isActive": true,
      "visible": true,
      "createdAt": "2020-03-15T14:19:34.357-03:00",
      "__v": 0,
      "updatedAt": "2020-03-15T14:19:34.386-03:00"
    };
  },

  async GetAll() {
    let _users = [
    ]

    return _users;
  },

  async Update(Id, value) {
    return {
      "n": 1,
      "nModified": 0,
      "ok": 0
    }
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
