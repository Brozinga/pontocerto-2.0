const service = require("../../services/userServices");

module.exports = {
  async CreateUserController(req, res) {
    const body = req.body;
    const response = await service.CreateUser(body);
    res.status(response.status).json(response);
  },

  async UpdateUserController(req, res) {
    const body = req.body;
    const id = req.params.id;

    const response = await service.UpdateUser(id, body);
    res.status(response.status).json(response);
  },

  async GetUserByIdController(req, res) {
    const id = req.params.id;
    const response = await service.GetUserById(id);
    res.status(response.status).json(response);
  },

  async GetUserByEmailController(req, res) {
    const email = req.params.email;
    const response = await service.GetUserByEmail(email);
    res.status(response.status).json(response);
  },

  async GetAllController(req, res) {
    const response = await service.GetAllUsers();
    res.status(response.status).json(response);
  },

  async DeleteUserByIdController(req, res) {
    const id = req.params.id;
    const response = await service.DeleteUserById(id);
    res.status(response.status).json(response);
  },

  async UpdatePasswordController(req, res) {
    const id = req.params.id;
    const { password, checkPassword } = req.body;
    const response = await service.UpdatePassword(id, password, checkPassword);
    res.status(response.status).json(response);
  }
};
