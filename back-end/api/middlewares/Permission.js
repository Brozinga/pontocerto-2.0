"use strict";

const verifyJWT = require("./JwtVerications");
const response = require("../../domain/httpResponses/BasicResponse");

const Permit = (...allowed) => {
  const isAllowed = role => allowed.indexOf(role) > -1;

  return async (req, res, next) => {
    await verifyJWT(req, res, user => {
      if (user && isAllowed(user.role)) {
        next();
      } else {
        res.status(403).json(response(403, "Usuario não autorizado", true));
      }
    });
  };
};

module.exports = Permit;
