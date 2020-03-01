module.exports = {
  "/login": {
    post: {
      tags: ["Login"],
      summary: "Login in API",
      description: "Get JWT Token for use in API",
      parameters: [
        {
          name: "login",
          in: "body",
          description: "Login that we want",
          required: true,
          schema: {
            $ref: "#/definitions/Login"
          }
        }
      ],
      produces: ["application/json"],
      responses: {
        "200": {
          description: "Login success",
          schema: {
            $ref: "#/definitions/JWT200"
          }
        },
        "403": {
          description: "User is not correct",
          schema: {
            $ref: "#/definitions/Login403"
          }
        },
        "404": {
          description: "User not found",
          schema: {
            $ref: "#/definitions/Error404"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    }
  }
};
