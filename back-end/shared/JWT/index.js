"use strict";
const jwt = require("jsonwebtoken");
const response = require("../../domain/httpResponses/BasicResponse");

const ValidateToken = async (Token, Secret) => {
  if (!Token) return response(401, "O Token é inválido.", true);

  if (!Token.startsWith("bearer") && !Token.startsWith("Bearer"))
    return response(401, "O Token é inválido.", true);

  let token = Token.slice(7, Token.length).trim();

  try {
    let decoded = await jwt.verify(token, Secret);
    return response(200, decoded, false);
  } catch (err) {
    if (err.name === "TokenExpiredError")
      return response(403, "A Sessão foi expirada.", true);
    if (err.name === "JsonWebTokenError")
      return response(401, "O formato do token é inválido.", true);

    return response(500, "Falha ao autenticar", true);
  }
};

const GenerateToken = (Items, Secret, Time) => {
  let token = jwt.sign({ ...Items }, Secret, { expiresIn: Time });

  return token;
};

module.exports = {
  ValidateToken,
  GenerateToken
};
