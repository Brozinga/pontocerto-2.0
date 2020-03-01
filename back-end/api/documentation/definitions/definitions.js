const user = require("./users");
const schedule = require("./schedule");
const login = require("./login");

module.exports = {
  definitions: {
    OK200: {
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
          $ref: "#/definitions/UserResponse"
        }
      }
    },
    Deleted200: {
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
            n: {
              type: "integer"
            },
            nModified: {
              type: "integer"
            },
            ok: {
              type: "integer"
            }
          }
        }
      }
    },
    Update200: {
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
            n: {
              type: "integer"
            },
            nModified: {
              type: "integer"
            },
            ok: {
              type: "integer"
            }
          }
        }
      }
    },
    Created201: {
      properties: {
        status: {
          type: "integer",
          example: 201
        },
        error: {
          type: "boolean",
          example: false
        },
        message: {
          type: "object",
          $ref: "#/definitions/UserResponse"
        }
      }
    },
    CreatedSchedule201: {
      properties: {
        status: {
          type: "integer",
          example: 201
        },
        error: {
          type: "boolean",
          example: false
        },
        message: {
          type: "object",
          $ref: "#/definitions/ScheduleResponse"
        }
      }
    },
    Error400: {
      properties: {
        status: {
          type: "integer",
          example: 400
        },
        error: {
          type: "boolean",
          example: true
        },
        message: {
          type: "string",
          example: "Bad Request"
        }
      }
    },
    Error404: {
      properties: {
        status: {
          type: "integer",
          example: 404
        },
        error: {
          type: "boolean",
          example: true
        },
        message: {
          type: "string",
          example: "Item não encontrado!"
        }
      }
    },
    Error401: {
      properties: {
        status: {
          type: "integer",
          example: 401
        },
        error: {
          type: "boolean",
          example: true
        },
        message: {
          type: "string",
          example: "O Token é inválido / Sessao Expirada"
        }
      }
    },
    Error403: {
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
          example: "Usuario não autorizado"
        }
      }
    },
    Error500: {
      properties: {
        code: {
          type: "string",
          example: "BBCF1648"
        },
        status: {
          type: "integer",
          example: 500
        },
        error: {
          type: "boolean",
          example: true
        },
        message: {
          type: "string",
          example: "Ouve um erro no servidor, fale com o Administrador!"
        }
      }
    },
    Error422: {
      properties: {
        status: {
          type: "integer",
          example: 422
        },
        error: {
          type: "boolean",
          example: true
        },
        message: {
          type: "string",
          example: "Este email já está cadastrado!"
        }
      }
    },
    ...user,
    ...schedule,
    ...login
  }
};
