module.exports = {
  // components: {
  //   securitySchemes: {
  //     BearerAuth: {
  //       type: "http",
  //       scheme: "bearer",
  //       bearerFormat: "JWT",
  //       value: "Bearer <JWT>"
  //     }
  //   }
  // },
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      description: "Add Bearer in string value for use correct Token",
      name: "Authorization",
      in: "header"
    }
  }
};
