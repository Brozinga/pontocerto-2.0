require("../../../environment");
const JWT = require('../../../shared/JWT');


describe("JWT - OK", () => {

    it('token OK - "bearer Token"', async () => {

        const token = await JWT.GenerateToken(
            { id: "5e5c4ae96365f441dcbb64c8", role: "admin" },
            process.env.JWT_SECRET,
            process.env.JWT_TIME
        );

        const response = await JWT.ValidateToken(`bearer ${token}`, process.env.JWT_SECRET);
        expect(response.status).toBe(200);
        expect(response.message.role).toBe("admin");
    })

});


describe("JWT - Fail", () => {

    it('token is invalid', async () => {

        const token = await JWT.GenerateToken(
            { id: "5e5c4ae96365f441dcbb64c8", role: "admin" },
            process.env.JWT_SECRET,
            process.env.JWT_TIME
        );

        const response = await JWT.ValidateToken(``, process.env.JWT_SECRET);
        expect(response.status).toBe(401);
        expect(response.error).toBe(true);
    })

    it("token format don't match - bearer not found", async () => {

        const token = await JWT.GenerateToken(
            { id: "5e5c4ae96365f441dcbb64c8", role: "admin" },
            process.env.JWT_SECRET,
            process.env.JWT_TIME
        );

        const response = await JWT.ValidateToken(`${token}`, process.env.JWT_SECRET);
        expect(response.status).toBe(401);
        expect(response.error).toBe(true);
    })


    it("token format don't match - imcomplet bearer", async () => {

        const token = await JWT.GenerateToken(
            { id: "5e5c4ae96365f441dcbb64c8", role: "admin" },
            process.env.JWT_SECRET,
            process.env.JWT_TIME
        );

        const response = await JWT.ValidateToken(`beare ${token}`, process.env.JWT_SECRET);
        expect(response.status).toBe(401);
        expect(response.error).toBe(true);
    })

    it("token invalid token", async () => {

        const token = await JWT.GenerateToken(
            { id: "5e5c4ae96365f441dcbb64c8", role: "admin" },
            process.env.JWT_SECRET,
            process.env.JWT_TIME
        );

        const response = await JWT.ValidateToken(`bearer ${token}a`, process.env.JWT_SECRET);
        expect(response.status).toBe(401);
        expect(response.error).toBe(true);
    })


    it("token expired", async () => {

        const token = await JWT.GenerateToken(
            { id: "5e5c4ae96365f441dcbb64c8", role: "admin" },
            process.env.JWT_SECRET,
            '1ms'
        );

        const response = await JWT.ValidateToken(`bearer ${token}`, process.env.JWT_SECRET);
        console.log(response);

        expect(response.status).toBe(403);
        expect(response.error).toBe(true);

    })

});