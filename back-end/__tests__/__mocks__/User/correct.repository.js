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
  }
};
