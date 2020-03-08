const userService = require("../../../services/user.service").load;
const acessType = require("../../../domain/enums/eAcessTypes");

module.exports = async () => {
  const admin = await userService.Create({
    name: "admin",
    email: "admin@email.com",
    password: "admin123",
    checkPassword: "admin123",
    entryTime: `${new Date()}`,
    exitTime: `${new Date()}`,
    acessType: acessType.ADMIN
  });
  const user = await userService.Create({
    name: "user",
    email: "user@email.com",
    password: "123456",
    checkPassword: "123456",
    entryTime: `${new Date()}`,
    exitTime: `${new Date()}`,
    acessType: acessType.BASICUSER
  });

  if (admin.status !== 201)
    console.log("Erro ao adicionar o admin " + JSON.stringify(admin.message));

  if (user.status !== 201)
    console.log("Erro ao adicionar o user " + JSON.stringify(user.message));
};
