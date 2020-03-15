let fail = require("../__mocks__/User/fail.repository");
let correct = require("../__mocks__/User/correct.repository");
let login = require("../../services/login.service");
require("../../environment");

describe("Login - OK", () => {
  it("generate and return JWT and Status Code = 200", async () => {
    const response = await login
      .service(correct)
      .VerifyUserLogin("admin@email.com", "admin123");

    expect(response.status).toBe(200);
    expect(response.error).toBe(false);
    expect(response.message.token).not.toBeNull();
  });
});

describe("Login - Fail", () => {

  it("Fail - email incorrect", async () => {
    const response = await login
      .service(correct)
      .VerifyUserLogin("adminemail.com.br", "admin123");

    expect(response.status).toBe(400);
    expect(response.error).toBe(true);
  });

  it("Fail - password is incorrect", async () => {
    const response = await login
      .service(correct)
      .VerifyUserLogin("admin@email.com", "admin1234");

    expect(response.status).toBe(403);
    expect(response.error).toBe(true);
  });

  it("Fail - user not found", async () => {
    const response = await login
      .service(fail)
      .VerifyUserLogin("email@email.com", "admin1234");

    expect(response.status).toBe(404);
    expect(response.error).toBe(true);
  });
})
