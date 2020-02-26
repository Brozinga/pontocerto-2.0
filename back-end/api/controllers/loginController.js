const service = require("../../services/loginService").Service;

module.exports = {
  async Post(req, res) {
    const response = await service.VerifyUserLogin(
      req.body.email,
      req.body.password
    );
    res.status(response.status).json(response);
  }
};
