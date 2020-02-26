const service = require("../../services/userServices").Service;

module.exports = {
  async Post(req, res) {
    const body = req.body;
    const response = await service.Create(body);
    res.status(response.status).json(response);
  },

  async Patch(req, res) {
    const body = req.body;
    const id = req.params.id;

    const response = await service.Update(id, body);
    res.status(response.status).json(response);
  },

  async GetUserById(req, res) {
    const id = req.params.id;
    const response = await service.GetById(id);
    res.status(response.status).json(response);
  },

  async GetUserByEmail(req, res) {
    const email = req.params.email;
    const response = await service.GetByEmail(email);
    res.status(response.status).json(response);
  },

  async GetAll(req, res) {
    const response = await service.GetAll();
    res.status(response.status).json(response);
  },

  async DeleteUserById(req, res) {
    const id = req.params.id;
    const response = await service.Delete(id);
    res.status(response.status).json(response);
  },

  async PutPassword(req, res) {
    const id = req.params.id;
    const { password, checkPassword } = req.body;
    const response = await service.UpdatePassword(id, password, checkPassword);
    res.status(response.status).json(response);
  }
};
