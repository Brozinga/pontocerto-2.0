const security = require("./security");
module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API Node.js DDD",
    description: "API Node.js using principle of DDD for project Ponto Certo",
    contact: {
      name: "Fernando Brozinga",
      email: "fbrozinga@outlook.com",
      url: "https://google.com.br"
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  host: `localhost:${process.env.PORT}`,
  basePath: "/api/v1",
  ...security,
  tags: [
    {
      name: "User",
      description: "API test on DDD - managent User."
    },
    {
      name: "Schedule",
      description: "API test on DDD - management Schedule."
    },
    {
      name: "Login",
      description: "Login on API and get JWT Token."
    },
    {
      name: "Admin",
      description: "Routes exclusive admin role."
    }
  ],
  schemes: ["https", "http"],
  consumes: ["application/json"],
  produces: ["application/json"]
};
