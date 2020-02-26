"use strict";
const jwt = require("jsonwebtoken");
const response = require("../../domain/httpResponses/BasicResponse");

const ValidateToken = async (Token, Secret) => {
  let token = Token;

  if (!Token) return response(401, "O Token é inválido.", true);

  if (!token.startsWith("Bearer"))
    return response(401, "O Token é inválido.", true);

  Token = token.split(" ")[1];

  try {
    let decoded = await jwt.verify(Token, Secret);
    return response(200, decoded, false);
  } catch (err) {
    if (err.name === "TokenExpiredError")
      return response(401, "A Sessão foi expirada.", true);
    if (err.name === "JsonWebTokenError")
      return response(401, "O Token enviado é inválido.", true);

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
