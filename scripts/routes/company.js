// routes/company.js

// Import express
const express = require("express");
// Define the router using the express router
const companyRouter = express.Router();

// Import the companyController
const companyController = require("../controllers/company");

// For each route access the correct controller method

// Request all companies, send it to the / route
companyRouter.get("/", companyController.findAll);

// Request single company, send it to the /:id route
companyRouter.get("/:id", companyController.findById);

// Export the router
module.exports = companyRouter;
