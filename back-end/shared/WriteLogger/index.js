const logger = require("./config")({
  location: "api/logs"
});
const moment = require("moment");
const uuid = require("uuid");

const ErrorResponse = require("../../domain/httpResponses/BasicResponse");

const stringErrorProduction =
  "Ouve um erro no servidor, fale com o Administrador!";

let env = process.env.NODE_ENV !== "development" ? true : false;

module.exports.logErrors = (error, statusCode = null, informations = null) => {
  let _statusCode = statusCode ? statusCode : 500;
  let errorCode = uuid().toUpperCase().substring(0, 8);

  let dataAgora = moment.utc().format("DD-MM-YYYY HH:mm:ss");

  let erroEntrada = JSON.stringify(error);

  switch (_statusCode) {
    case 400:
      return ErrorResponse(400, erroEntrada, true);

    case 401:
      return ErrorResponse(401, erroEntrada, true);

    case 403:
      return ErrorResponse(403, erroEntrada, true);

    case 404:
      return ErrorResponse(404, erroEntrada, true);

    default:
      logger.stream.write(
        informations
          ? `DATA: ${dataAgora} | STATUS: ${_statusCode} | URL: ${informations.url} | METHOD: ${informations.method} | CODIGO: ${errorCode} | ERRO: ${erroEntrada}`
          : `DATA: ${dataAgora} | STATUS: ${_statusCode} | CODIGO: ${errorCode} | ERRO: ${erroEntrada}`
      );
      return env
        ? ErrorResponse(500, stringErrorProduction, true, errorCode)
        : ErrorResponse(500, erroEntrada, true, errorCode);
  }
};
