process.env.MONGO_URL = "mongodb://localhost:27017";
const db = require("../../context/mongodb");
const userSeed = require("./user");

const seed = async () => {
  console.log("================== SEED ====================");
  console.log("\x1b[34mAdd data on Database");
  await userSeed();
  console.log("Process of Seed finally! :)");
  console.log("\x1b[0m=============== FIM - SEED =================");
};

db.openDb.then(async db => {
  seed()
    .then(test => {
      process.exit(0);
    })
    .catch(err => {
      console.log(err);
      process.exit(0);
    });
});
