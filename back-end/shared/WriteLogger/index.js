const logger = require("./config");
const moment = require("moment");
const uuid = require("uuid");

const ErrorResponse = require("../../domain/httpResponses/ErrorResponse");

const stringErrorProduction =
  "Ouve um erro no servidor, fale com o Administrador";

let env = process.env.NODE_ENV !== "development" ? true : false;

module.exports.logErrors = (error, statusCode = null, lang = null) => {
  let _statusCode = statusCode ? statusCode : 500;
  let errorCode = uuid().toUpperCase().substring(0, 8);

  let dataAgora = moment.utc().format("DD-MM-YYYY HH:mm:ss");

  let erroEntrada = error.toString().toLowerCase();

  if (typeof error === "string") error = erroEntrada;

  switch (_statusCode) {
    case 400:
      return ErrorResponse(400, error);

    case 401:
      return ErrorResponse(401, error);

    case 403:
      return ErrorResponse(403, error);

    case 404:
      return ErrorResponse(404, error);

    default:
      logger.stream.write(
        `DATA: ${dataAgora} | STATUS: ${500}  | CODIGO: ${errorCode} | ERRO: ${JSON.stringify(
          error
        )}`
      );
      return env
        ? ErrorResponse(500, stringErrorProduction, errorCode)
        : ErrorResponse(500, error, errorCode);
  }
};
