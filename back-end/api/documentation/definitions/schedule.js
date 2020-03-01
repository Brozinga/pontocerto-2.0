module.exports = {
  Schedule: {
    properties: {
      description: {
        type: "string",
        uniqueItems: true,
        example: "Criando uma API"
      },
      userId: {
        type: "string",
        uniqueItems: true,
        example: "5e5485c1a8759559c84bc473"
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
  ScheduleResponse: {
    properties: {
      _id: {
        type: "string",
        example: "5e55abc194c3df110ca8d5c9"
      },
      description: {
        type: "string",
        uniqueItems: true,
        example: "Criando uma API"
      },
      userId: {
        type: "string",
        uniqueItems: true,
        example: "5e5485c1a8759559c84bc473"
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
  }
};
