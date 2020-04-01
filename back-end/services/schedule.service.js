const ScheduleRepository = require("../infra/repository/schedule.repository");
const response = require("../domain/httpResponses/BasicResponse");
const ScheduleSchema = require("../domain/entities/schedule");
const Service = Repository => {
  return {
    async Create(Body) {
      let _schedule = ScheduleSchema.NewScheduleValidation(Body);

      if (_schedule.error) return response(400, _schedule.error.details, true);

      let scheduleInserted = await Repository.Create(_schedule.value);

      return response(201, scheduleInserted);
    },
    async Update(Id, Body) {
      let _findSchedule = await Repository.GetById(Id);

      if (!_findSchedule || !Object.keys(_findSchedule).length)
        return response(404, "Tarefa não encontrada!", true);

      let scheduleToUpdated = Object.assign(_findSchedule, Body);

      let validation = { ...scheduleToUpdated };
      validation.userId = validation.userId.toString();
      delete validation.__v;
      delete validation._id;

      let _schedule = ScheduleSchema.UpdateScheduleValidation(validation);

      if (_schedule.error) return response(400, _schedule.error.details, true);

      const _scheduleUpdated = await Repository.Update(
        Id,
        Object.assign(_findSchedule, _schedule.value)
      );

      return response(200, _scheduleUpdated, false);
    },
    async GetById(Id) {
      const _findSchedule = await Repository.GetById(Id);

      if (!_findSchedule || !Object.keys(_findSchedule).length) return response(404, "Tarefa não encontrada!", true);

      return response(200, _findSchedule, false);
    },
    async GetByUserId(UserId) {
      let _schedule = await Repository.GetAllByUserId(UserId);

      if (!_schedule.length)
        return response(404, "Tarefas não encontradas!", true);

      return response(200, _schedule, false);
    },
    async Delete(Id) {
      const _findSchedule = await Repository.DeleteById(Id);
      return response(200, _findSchedule);
    }
  };
};

module.exports = {
  service: Service,
  load: Service(ScheduleRepository)
};
