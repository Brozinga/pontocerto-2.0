const service = require("../../services/userServices");

module.exports = {
  async UserCreateController(req, res) {
    const body = req.body;
    const response = await service.CreateUser(body);

    res.status(response.status).json(response);
  }
};
