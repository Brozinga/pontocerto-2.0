module.exports = {
  "/schedule/{id}": {
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        description: "ID of user that we want to find",
        type: "string"
      }
    ],
    get: {
      tags: ["Schedule", "User"],
      summary: "Get Schedules on Id",
      security: [{ Bearer: [] }],
      responses: {
        "200": {
          description: "OK",
          schema: {
            $ref: "#/definitions/ScheduleResponse"
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
          description: "Schedule Not Found",
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
      summary: "Delete schedule with given ID",
      tags: ["Admin"],
      security: [{ Bearer: [] }],
      responses: {
        "200": {
          description: "Schedule is deleted",
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
      summary: "Update schedule with give ID",
      tags: ["Schedule"],
      security: [{ Bearer: [] }],
      parameters: [
        {
          name: "user",
          in: "body",
          required: true,
          description: "Schedule that we want to updated",
          schema: {
            $ref: "#/definitions/Schedule"
          }
        }
      ],
      responses: {
        "200": {
          description: "Schedule is updated",
          schema: {
            $ref: "#/definitions/Deleted200"
          }
        },
        "400": {
          description: "Data sent for update is incorrect or invalid",
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
          description: "Schedule not found",
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
  "/schedule/user/{userId}": {
    parameters: [
      {
        name: "userId",
        in: "path",
        required: true,
        description: "ID of user that we want to find Schedules",
        type: "string"
      }
    ],
    get: {
      tags: ["Schedule"],
      summary: "Get all Schedules on UserId",
      security: [{ Bearer: [] }],
      responses: {
        "200": {
          description: "OK",
          schema: {
            $ref: "#/definitions/ScheduleResponse"
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
          description: "Schedules Not Found",
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
  "/schedule": {
    post: {
      summary: "Create new schedule",
      parameters: [
        {
          name: "schedule",
          in: "body",
          description: "Schedule that we want to create",
          schema: {
            $ref: "#/definitions/Schedule"
          }
        }
      ],
      tags: ["Schedule"],
      security: [{ Bearer: [] }],
      responses: {
        "201": {
          description: "Schedule is created",
          schema: {
            $ref: "#/definitions/CreatedSchedule201"
          }
        },
        "400": {
          description: "Data sent for creation is incorrect or invalid",
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
