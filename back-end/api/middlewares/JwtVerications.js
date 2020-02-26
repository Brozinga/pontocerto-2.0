"use strict";

const JwtChecker = require("../../shared/JWT").ValidateToken;

module.exports = async (req, res, next) => {
  let token = req.headers["authorization"] || req.headers["x-access-token"];
  let respose = await JwtChecker(token, process.env.JWT_SECRET);

  if (respose.error) return res.status(respose.status).json(respose);

  req.decoded = respose.message;

  next(respose.message);
};
