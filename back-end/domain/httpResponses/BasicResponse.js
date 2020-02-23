const Response = (status, message, error = false, code = null) => {
  //  if (typeof message === "string") message = erroEntrada;

  return code
    ? {
        code,
        status,
        error,
        message
      }
    : {
        status,
        error,
        message
      };
};

module.exports = Response;
