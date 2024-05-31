const express = require("express");
const { WakeUpCron } = require("../../controllers/crons");
const cronRoutes = express.Router();

cronRoutes.get("/", WakeUpCron);
cronRoutes.post("/", WakeUpCron);

module.exports = cronRoutes;
