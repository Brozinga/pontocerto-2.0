const express = require("express");

const router = express.Router();

require('./login.routes')(router);
require('./user.routes')(router);
require('./schedule.routes')(router);

module.exports = router;
