const service = require("../../services/scheduleService").Service;

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
  async GetByUserId(req, res) {
    const id = req.params.userId;
    const response = await service.GetByUserId(id);
    res.status(response.status).json(response);
  },
  async GetById(req, res) {
    const id = req.params.id;
    const response = await service.GetById(id);
    res.status(response.status).json(response);
  },
  async Delete(req, res) {
    var id = req.params.id;
    const response = await service.Delete(id);
    res.status(response.status).json(response);
  }
};
