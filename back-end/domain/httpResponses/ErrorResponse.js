const ErrorResponse = (status, message, code = null) => {
  //  if (typeof message === "string") message = erroEntrada;

  return code
    ? {
        code,
        status,
        message
      }
    : {
        status,
        message
      };
};

module.exports = ErrorResponse;
