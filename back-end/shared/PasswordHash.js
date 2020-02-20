const bcrypt = require("bcrypt");

module.exports = saltRounds => {
  (createPasswordHash = password => {
    return bcrypt.hashSync(password, saltRounds);
  }),
    (comparePasswordHash = (password, hash) => {
      return bcrypt.compareSync(password, hash);
    }),
    (passwordCompare = (password, confirmation) => {
      let bc = bcrypt.hashSync(password, confirmation);
      return bcrypt.compareSync(bc, confirmation);
    });
};
