module.exports = {
  JWT200: {
    properties: {
      status: {
        type: "integer",
        example: 200
      },
      error: {
        type: "boolean",
        example: false
      },
      message: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "ADMIN"
          },

          token: {
            type: "string",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTQ4NWMxYTg3NTk1NTljODRiYzQ3MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMDE3MTI5LCJleHAiOjE1ODMwMzg3Mjl9.1Whq4FilgT_TdZ3JCoVmtXokp7g4TcLjC6kQsgpiHVI"
          }
        }
      }
    }
  },
  Login403: {
    properties: {
      status: {
        type: "integer",
        example: 403
      },
      error: {
        type: "boolean",
        example: true
      },
      message: {
        type: "string",
        example: "Usuário ou senha incorretos!"
      }
    }
  },
  Login: {
    properties: {
      email: {
        type: "string",
        example: "admin@email.com"
      },
      password: {
        type: "string",
        example: "admin123"
      }
    }
  }
};
