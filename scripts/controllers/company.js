// controllers/company.js

// Import the Company model.
const Company = require("../models/company");

// Instantiate the controller object
const companyController = {};

// Controller method for handling a request for all companies
companyController.findAll = (req, res) => {
  // Uses the findAll method from Company
  Company.findAll()
    .then(companies => {
      // Sends the companies as a JSON object
      res.json({
        message: "Success",
        data: companies
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({ err });
    });
};

// Controller method for handling a request for a single company
companyController.findById = (req, res) => {
  // Company method for finding by id, passes the id as an argument
  Company.findById(req.params.id)
    .then(company => {
      // Sends the company as a JSON object
      res.json({
        message: "Success",
        data: company
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({ err });
    });
};

// Export the controller
module.exports = companyController;
