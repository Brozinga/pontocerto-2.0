module.exports = {
  "/users": {
    get: {
      tags: ["Admin"],
      summary: "Get all users in API",
      security: [{ Bearer: [] }],
      responses: {
        "200": {
          description: "Users with complete data",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/UserResponse"
            }
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "404": {
          description: "Users not found",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/UserResponse"
            }
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/Error500"
            }
          }
        }
      }
    }
  },
  "/user": {
    post: {
      tags: ["Admin"],
      summary: "Create new User in API",
      description: "Create new User",
      security: [{ Bearer: [] }],
      parameters: [
        {
          name: "user",
          in: "body",
          required: true,
          description: "User that we want to create",
          schema: {
            $ref: "#/definitions/User"
          }
        }
      ],
      produces: ["application/json"],
      responses: {
        "201": {
          description: "New user is created",
          schema: {
            $ref: "#/definitions/Created201"
          }
        },
        "400": {
          description: "Incomplete or incorrect user creation data",
          schema: {
            $ref: "#/definitions/Error400"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "422": {
          description: "E-mail already registered",
          schema: {
            $ref: "#/definitions/Error422"
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
  },
  "/user/{userId}": {
    parameters: [
      {
        name: "userId",
        in: "path",
        required: true,
        description: "ID of user that we want to find",
        type: "string"
      }
    ],
    get: {
      tags: ["User"],
      summary: "Get user with given ID",
      security: [{ Bearer: [] }],
      responses: {
        "200": {
          description: "User is found",
          schema: {
            $ref: "#/definitions/OK200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
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
    },
    post: {
      summary: "Delete user with given ID",
      security: [{ Bearer: [] }],
      tags: ["Admin"],
      responses: {
        "200": {
          description: "User is deleted",
          schema: {
            $ref: "#/definitions/Deleted200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "500": {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/Error500"
          }
        }
      }
    },
    patch: {
      summary: "Update user with give ID",
      security: [{ Bearer: [] }],
      tags: ["User"],
      parameters: [
        {
          name: "user",
          in: "body",
          required: true,
          description: "User that we want to updated",
          schema: {
            $ref: "#/definitions/User"
          }
        }
      ],
      responses: {
        "200": {
          description: "User is updated",
          schema: {
            $ref: "#/definitions/Deleted200"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "400": {
          description: "Incomplete or incorrect user update data",
          schema: {
            $ref: "#/definitions/Error400"
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
  },
  "/user/email/{email}": {
    parameters: [
      {
        name: "email",
        in: "path",
        required: true,
        description: "Email of user that we want to find",
        type: "string"
      }
    ],
    get: {
      tags: ["Admin"],
      summary: "Get user with given Email",
      security: [{ Bearer: [] }],
      responses: {
        "200": {
          description: "User is found",
          schema: {
            $ref: "#/definitions/OK200"
          }
        },
        "400": {
          description: "Incomplete or incorrect email",
          schema: {
            $ref: "#/definitions/Error400"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
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
  },
  "/user/password/{userId}": {
    parameters: [
      {
        name: "userId",
        in: "path",
        required: true,
        description: "Id of user that we want to find",
        type: "string"
      }
    ],
    patch: {
      tags: ["User"],
      summary: "Updating the user's password",
      security: [{ Bearer: [] }],
      parameters: [
        {
          name: "user",
          in: "body",
          description: "Password for updated",
          schema: {
            $ref: "#/definitions/Password"
          }
        }
      ],
      responses: {
        "200": {
          description: "User is found",
          schema: {
            $ref: "#/definitions/Update200"
          }
        },
        "400": {
          description: "Incomplete password sent",
          schema: {
            $ref: "#/definitions/Error400"
          }
        },
        "401": {
          description: "Token invalid",
          schema: {
            $ref: "#/definitions/Error401"
          }
        },
        "403": {
          description: "Token invalid or User not allow",
          schema: {
            $ref: "#/definitions/Error403"
          }
        },
        "404": {
          description: "User Not Found",
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
