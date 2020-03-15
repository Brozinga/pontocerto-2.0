module.exports = {
  async GetByEmailAddPassword(email) {
    let _user = {
      _id: "5e5c4ae96365f441dcbb64c8",
      isActive: true,
      name: "ADMIN",
      visible: true,
      acessType: "admin",
      email: "admin@email.com",
      password: "$2b$10$hDlabrbbelJ37nBsX6VQiuSlYqyy.4ay1mNOa8EpMB.gwNJhkqfNO"
    };
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
  }
  },
  
  async GetById(id) {
    return {
      "_id": "5e5c4ae96365f441dcbb64c8",
      "name": "ADMIN",
      "email": "admin@email.com",
      "entryTime": "2020-03-01T23:53:13.000Z",
      "exitTime": "2020-03-01T23:53:13.000Z",
      "acessType": "admin",
      "isActive": true,
      "visible": true,
      "createdAt": "2020-03-01T23:53:13.182Z",
      "__v": 0
    }
  },

  async GetByEmail(email) {
    return null;
  },

  async Update(id, update) {
      return {
        "n": 1,
        "nModified": 1,
        "ok": 1
      }
  },

  async GetAll() {
    let _users = [
      {
        "_id": "5e5c4ae96365f441dcbb64c8",
        "name": "ADMIN",
        "email": "admin@email.com",
        "entryTime": "2020-03-01T23:53:13.000Z",
        "exitTime": "2020-03-01T23:53:13.000Z",
        "acessType": "admin",
        "isActive": true,
        "visible": true,
        "createdAt": "2020-03-01T23:53:13.182Z",
        "__v": 0
      },
      {
        "_id": "5e5c4ae96365f441dcbb64c9",
        "name": "USER",
        "email": "user@email.com",
        "entryTime": "2020-03-01T23:53:13.000Z",
        "exitTime": "2020-03-01T23:53:13.000Z",
        "acessType": "user",
        "isActive": true,
        "visible": true,
        "createdAt": "2020-03-01T23:53:13.182Z",
        "__v": 0
      }
    ]

    return _users;
  },

  async Create(user) {
    let _user = {
      _id: "5e6e61b1e1a4e14194899f01",
      name: user.name,
      email: user.email,
      password: user.password,
      entryTime: user.entryTime,
      exitTime: user.exitTime,
      acessType: user.acessType,
      isActive: user.isActive,
      visible: user.visible,
      createdAt: "2020-03-15T17:09:57.881Z",
      "__v": 0
    }

    return _user;
  },

  async DeleteById(id) {
    return {
      "n": 1,
      "ok": 1,
      "deletedCount": 1
    }
  }
};
