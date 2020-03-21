const express = require("express");

const router = express.Router();
const version = process.env.VERSION;

//BASE
router.get(`/`, (req, res, next) => {
  process.env.NODE_ENV === "development"
    ? res.redirect(`${version}/api-docs`)
    : res.json({ status: 200, error: false, message: "API is Running!" });
});

require('./login.routes')(router);
require('./user.routes')(router);
require('./schedule.routes')(router);


module.exports = router;
