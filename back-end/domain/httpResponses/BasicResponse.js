const Response = (status, message, error = false, code = null) => {
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
