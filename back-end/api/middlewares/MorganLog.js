const logger = require("morgan");
module.exports = (app, anabled = true) => {
  if (process.env.NODE_ENV === "development" && anabled) {
    app.use(logger("dev"));
  }
};
