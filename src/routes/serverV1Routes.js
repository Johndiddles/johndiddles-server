const express = require("express");
const portfolioRoutes = require("./v1Routes/portfolio");
const cronRoutes = require("./v1Routes/crons");

const serverV1Routes = express.Router();

serverV1Routes.use("/portfolio", portfolioRoutes);
serverV1Routes.use("/cron", cronRoutes);

module.exports = serverV1Routes;
