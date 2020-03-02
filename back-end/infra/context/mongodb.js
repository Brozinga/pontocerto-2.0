const mongoose = require("mongoose");

const connectDb = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
connectDb.then(
  db => console.log("\x1b[36m%s\x1b[0m", "MONGO CONNECTED SUCCESSFULLY!"),
  err => console.log("\x1b[31m%s\x1b[0m", "ERRO AO CONECTAR COM O MONGO: ", err)
);

module.exports.connectDb = connectDb;
module.exports.openDb = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
