const express = require("express");
const {
  contactController,
} = require("../../controllers/portfolio/contact.controller");
const portfolioRoutes = express.Router();

portfolioRoutes.post("/contact", contactController);

module.exports = portfolioRoutes;
