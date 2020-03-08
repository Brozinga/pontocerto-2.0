let correct = require("../__mocks__/User/correct.repository");
let login = require("../../services/login.service");
require("../../environment");

describe("Login - Test", () => {
  it("generate and return JWT and Status Code = 200", async () => {
    const response = await login
      .service(correct)
      .VerifyUserLogin("admin@email.com", "admin123");
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.error).toBe(false);
  });

  it("Fail - email incorrect", async () => {
    const response = await login
      .service(correct)
      .VerifyUserLogin("adminemail.com.br", "admin123");
    console.log(response);
    expect(response.status).toBe(400);
    expect(response.error).toBe(true);
  });

  it("Fail - password is incorrect", async () => {
    const response = await login
      .service(correct)
      .VerifyUserLogin("admin@email.com", "admin1234");
    console.log(response);
    expect(response.status).toBe(403);
    expect(response.error).toBe(true);
  });
});
