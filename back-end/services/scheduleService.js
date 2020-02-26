const ScheduleRepository = require("../infra/repository/scheduleRepository");
const response = require("../domain/httpResponses/BasicResponse");
const Schedule = require("../domain/entities/schedule");
const Service = Repository => {
  return {
    async Create(Body) {
      let _schedule = Schedule.NewScheduleObject(
        Body.description,
        Body.userId,
        Body.entryTime,
        Body.exitTime
      );

      if (_schedule.error) return response(400, _schedule.error.details, true);

      let scheduleInserted = await Repository.Create(_schedule.value);

      return response(201, scheduleInserted);
    },
    async Update(Id, Body) {
      let _findSchedule = await Repository.GetById(Id);

      if (!_findSchedule) return response(404, "Tarefa não encontrada!", true);

      let scheduleToUpdated = Object.assign(_findSchedule._doc, Body);

      let validation = { ...scheduleToUpdated };
      validation.userId = validation.userId.toString();
      delete validation.__v;
      delete validation._id;

      let _schedule = Schedule.UpdateScheduleObject(validation);

      if (_schedule.error) return response(400, _schedule.error.details, true);

      const _scheduleUpdated = await Repository.Update(
        Id,
        Object.assign(_findSchedule, _schedule.value)
      );

      return response(200, _scheduleUpdated, false);
    },
    async GetById(Id) {
      const _findSchedule = await Repository.GetById(Id);

      if (!_findSchedule) return response(404, "Tarefa não encontrada!", true);

      return response(200, _findSchedule, false);
    },
    async GetByUserId(UserId) {
      let _schedule = await Repository.GetAllByUserId(UserId);

      if (!_schedule) return response(404, "Tarefas não encontradas!", true);

      return response(200, _schedule, false);
    },
    async Delete(Id) {
      const _findSchedule = await Repository.DeleteById(Id);
      return response(200, _findSchedule);
    }
  };
};

module.exports = {
  ServiceTest: Service,
  Service: Service(ScheduleRepository)
};
