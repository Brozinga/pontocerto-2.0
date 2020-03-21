"use strict";
const jwt = require("jsonwebtoken");
const response = require("../../domain/httpResponses/BasicResponse");

const ValidateToken = async (Token, Secret) => {
  if (!Token) return response(401, "O Token é inválido.", true);
  
  let token = Token.trim().split(/[\s\t]/g);

  if (token[0].toLocaleLowerCase() !== "bearer")
    return response(401, "O Token é inválido.", true);


  try {
    let decoded = await jwt.verify(token[1], Secret);
    return response(200, decoded, false);
  } catch (err) {
    if (err.name === "TokenExpiredError")
      return response(403, "A Sessão foi expirada.", true);
    if (err.name === "JsonWebTokenError")
      return response(401, "O formato do token é inválido.", true);

    return response(500, "Falha ao autenticar", true);
  }
};

const GenerateToken = async (Items, Secret, Time) => {
  let token = await jwt.sign({ ...Items }, Secret, { expiresIn: Time });

  return token;
};

module.exports = {
  ValidateToken,
  GenerateToken
};
