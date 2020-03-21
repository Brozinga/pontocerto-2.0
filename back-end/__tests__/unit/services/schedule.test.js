require("../../../environment");
const correct = require('../../__mocks__/Schedule/correct.repository');
const fail = require('../../__mocks__/Schedule/fail.repository');
const scheduleService = require('../../../services/schedule.service');

describe("Schedule Service - Ok", () => {


    it('Create schedule', async () => {
        const response = await scheduleService.service(correct).Create({
            "description": "Adicionando Tarefas para testes",
            "userId": "5e5c4ae96365f441dcbb64c9",
            "entryTime": "2020-03-16T02:39:03.028Z",
            "exitTime": "2020-03-16T02:39:03.028Z",
            "createdAt": "2020-03-16T02:39:03.028Z"
        });

        expect(response.status).toBe(201);
        expect(response.error).toBe(false);
    });

    it('Schedule get by Id', async () => {
        const response = await scheduleService.service(correct).GetById('5e6ee6db1d4a4f491c7a3fda');

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
    });

    it('Get schedule by user id', async () => {
        const response = await scheduleService.service(correct).GetByUserId('5e5c4ae96365f441dcbb64c9');

        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
    });

    it('Delete schedule by id', async () => {
        const response = await scheduleService.service(correct).Delete('5e5c4ae96365f441dcbb64c9');
        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
    });

    it('Update schedule', async () => {
        const response = await scheduleService.service(correct).Update('5e5c4ae96365f441dcbb64c9',
            {
                "description": "CRIANDO UMA API",
                "userId": "5e5c4ae96365f441dcbb64c9",
                "entryTime": "2020-03-16T02:39:03.028Z",
                "exitTime": "2020-03-16T02:39:03.028Z"
            });
        expect(response.status).toBe(200);
        expect(response.error).toBe(false);
        expect(response.message.nModified).toBe(1);
    });

});

describe("Schedule Service - Fail", () => {
    it('Create schedule invalid data send', async () => {
        const response = await scheduleService.service(fail).Create({
            "description": "Adicionando Tarefas para testes",
            "entryTime": "2020-03-16T02:39:03.028Z",
            "exitTime": "2020-03-16T02:39:03.028Z",
            "createdAt": "2020-03-16T02:39:03.028Z"
        });

        expect(response.status).toBe(400);
        expect(response.error).toBe(true);
    });

    it('Schedule get by Id not found', async () => {
        const response = await scheduleService.service(fail).GetById('5e6ee6db1d4a4f491c7a3fda');

        expect(response.status).toBe(404);
        expect(response.error).toBe(true);
    })

    it('Get schedule by user id', async () => {
        const response = await scheduleService.service(fail).GetByUserId('5e5c4ae96365f441dcbb64c9');

        expect(response.status).toBe(404);
        expect(response.error).toBe(true);
    });

    it('Update, schedule not found', async () => {
        const response = await scheduleService.service(fail).Update('5e5c4ae96365f441dcbb64c9', {
            "description": "Criando uma API"
        });

        expect(response.status).toBe(404);
        expect(response.error).toBe(true);
    });

    it('Update, schedule not found', async () => {
        const response = await scheduleService.service(correct).Update('5e5c4ae96365f441dcbb64c9', {
            "description": ""
        });

        expect(response.status).toBe(400);
        expect(response.error).toBe(true);
    });

});