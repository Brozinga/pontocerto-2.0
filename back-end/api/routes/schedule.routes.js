const Permit = require("../middlewares/Permission");
const ScheduleController = require("../controllers/schedule.controller");

const {
    SCHEDULE_URL,
    SCHEDULE_URL_ID,
    SCHEDULE_WITH_USER
} = require("./urls");

module.exports = (router) => {

router.post([SCHEDULE_URL_ID], Permit("admin"));
router.get([SCHEDULE_URL_ID, SCHEDULE_WITH_USER], Permit("admin", "user"));
router.post([SCHEDULE_URL], Permit("admin", "user"));
router.patch([SCHEDULE_URL_ID], Permit("admin", "user"));

router
  .get(SCHEDULE_URL_ID, ScheduleController.GetById)
  .get(SCHEDULE_WITH_USER, ScheduleController.GetByUserId)
  .post(SCHEDULE_URL, ScheduleController.Post)
  .post(SCHEDULE_URL_ID, ScheduleController.Delete)
  .patch(SCHEDULE_URL_ID, ScheduleController.Patch);

}