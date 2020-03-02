module.exports = {
  User: {
    required: [
      "name",
      "email",
      "password",
      "checkPassword",
      "entry_time",
      "exit_time"
    ],
    properties: {
      name: {
        type: "string",
        uniqueItems: true,
        example: "ADMIN"
      },
      email: {
        type: "string",
        uniqueItems: true,
        format: "email",
        example: "admin@email.com"
      },
      password: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      checkPassword: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      entryTime: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      exitTime: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      acessType: {
        type: "string",
        uniqueItems: true,
        enum: ["admin", "user"],
        example: "user"
      },
      isActive: {
        type: "boolean",
        uniqueItems: true,
        example: "true"
      }
    }
  },
  UserResponse: {
    properties: {
      _id: {
        type: "string",
        example: "5e5423f2e026820cfc84d273"
      },
      name: {
        type: "string",
        uniqueItems: true,
        example: "ADMIN"
      },
      email: {
        type: "string",
        uniqueItems: true,
        format: "email",
        example: "admin@email.com"
      },
      password: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      checkPassword: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      entryTime: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      exitTime: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      acessType: {
        type: "string",
        uniqueItems: true,
        enum: ["admin", "user"],
        example: "user"
      },
      isActive: {
        type: "boolean",
        uniqueItems: true,
        example: "true"
      },
      visible: {
        type: "boolean",
        uniqueItems: true,
        example: "true"
      },
      createdAt: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      updatedAt: {
        type: "string",
        uniqueItems: true,
        format: "date-time",
        exemple: "2020-02-25T23:19:24.054Z"
      }
    }
  },
  Password: {
    properties: {
      password: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      checkPassword: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      }
    }
  },
  UserUpdate: {
    properties: {
      name: {
        type: "string",
        uniqueItems: true,
        example: "fernando brozinga"
      },
      email: {
        type: "string",
        uniqueItems: true,
        format: "email",
        example: "email@email.com.br"
      },
      password: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      checkPassword: {
        type: "string",
        uniqueItems: true,
        minLength: 6
      },
      entryTime: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      exitTime: {
        type: "string",
        uniqueItems: true,
        format: "date-time"
      },
      acessType: {
        type: "string",
        uniqueItems: true,
        enum: ["admin", "user"],
        example: "user"
      },
      isActive: {
        type: "boolean",
        uniqueItems: true,
        example: "true"
      },
      visible: {
        type: "boolean",
        uniqueItems: true,
        example: "true"
      }
    }
  }
};
