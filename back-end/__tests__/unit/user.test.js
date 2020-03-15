let correct = require("../__mocks__/User/correct.repository");
let fail = require("../__mocks__/User/fail.repository");
let userService = require('../../services/user.service');
require("../../environment");

describe("User Service - Ok", () => {
    it("Get All users", async () => {
        const response = await userService
            .service(correct).GetAll();

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
        expect(Array.isArray(response.message)).toBe(true)
    });

    it("Get One user", async () => {
        const response = await userService
            .service(correct).GetById("5e5c4ae96365f441dcbb64c8")

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
        expect(response.message.name).toBe("ADMIN");
    });

    it("Create one user", async () => {
        const response = await userService
            .service(correct).Create({
                "name": "Testando",
                "email": "testando@email.com",
                "password": "string",
                "checkPassword": "string",
                "entryTime": "2020-03-15T17:09:00.311Z",
                "exitTime": "2020-03-15T17:09:00.311Z",
                "acessType": "user",
                "isActive": "true"
            })

        expect(response.status).toBe(201);
        expect(response.error).toBe(false);
        expect(response.message.name).toBe(String("Testando").toLocaleUpperCase());
    });

    it("Update user", async () => {
        const response = await userService
            .service(correct).Update("5e6e63e77857a23ec4192779", {
                "isActive": "false"
            })

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
        expect(response.message.ok).toBe(1);
    });

    it("Delete user", async () => {
        const response = await userService
            .service(correct).Delete("5e6e63e77857a23ec4192779");

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
        expect(response.message.deletedCount).toBe(1);
    });

    it("Update password user", async () => {
        const response = await userService
            .service(correct).UpdatePassword("5e6e63e77857a23ec4192779", "string", "string");

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
        expect(response.message.nModified).toBe(1);
    });

});

describe("User Service - Fail", () => {
    it("Users not found", async () => {
        const response = await userService
            .service(fail).GetAll();

        expect(response.status).toBe(404);
        expect(response.error).toBe(true);
    });

    it("User not found", async () => {
        const response = await userService
            .service(fail).GetById("5e5c4ae96365f441dcbb64c8");

        expect(response.status).toBe(404);
        expect(response.error).toBe(true);
    });

    it("Create user and fail validation", async () => {

        const response = await userService
            .service(fail).Create({
            })

        expect(response.status).toBe(400);
        expect(response.error).toBe(true);
    });

    it("Create user and email exists", async () => {

        const response = await userService
            .service(fail).Create({
                "name": "TESTE",
                "email": "testando@email.com",
                "password": "string",
                "checkPassword": "string",
                "entryTime": "2020-03-15T14:09:00.311-03:00",
                "exitTime": "2020-03-15T14:09:00.311-03:00",
                "acessType": "user",
                "isActive": true,
                "visible": true
            })

        expect(response.status).toBe(422);
        expect(response.error).toBe(true);
    })

    it("User not found to Update", async () => {

        const response = await userService
            .service(fail).Update( "5e6e63e77857a23ec4192779",{
                "name": "TESTE"
            })

        expect(response.status).toBe(404);
        expect(response.error).toBe(true);
    })

    it("User update data incorrect", async () => {

        const response = await userService
            .service(fail).Update( "5e6e63e77857a23ec4192779",{
                "email": "testandoemail.com"
            })

        expect(response.status).toBe(400);
        expect(response.error).toBe(true);
    })

});