const logger = require("./config")({
  location: "api/logs"
});
const moment = require("moment");
const uuid = require("uuid");

const ErrorResponse = require("../../domain/httpResponses/BasicResponse");

const stringErrorProduction =
  "Ouve um erro no servidor, fale com o Administrador!";

let env = process.env.NODE_ENV !== "development" ? true : false;

module.exports.logErrors = (error, statusCode = null, lang = null) => {
  let _statusCode = statusCode ? statusCode : 500;
  let errorCode = uuid().toUpperCase().substring(0, 8);

  let dataAgora = moment.utc().format("DD-MM-YYYY HH:mm:ss");
  console.log(typeof error);
  let erroEntrada = error.toString().toLowerCase();

  if (typeof error === "object") error = erroEntrada;

  switch (_statusCode) {
    case 400:
      return ErrorResponse(400, error, true);

    case 401:
      return ErrorResponse(401, error, true);

    case 403:
      return ErrorResponse(403, error, true);

    case 404:
      return ErrorResponse(404, error, true);

    default:
      logger.stream.write(
        `DATA: ${dataAgora} | STATUS: ${500}  | CODIGO: ${errorCode} | ERRO: ${JSON.stringify(
          error
        )}`
      );
      return env
        ? ErrorResponse(500, stringErrorProduction, true, errorCode)
        : ErrorResponse(500, error, true, errorCode);
  }
};
