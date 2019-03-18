// models/company.js

// Import the database
const db = require("../db/config");

// Instantiate a new object.
// This will interface with the fipass-app database.
// Specifically, the companies table.
const Company = {};

// Define methods for the Company object

// Returns all companies from the table
Company.findAll = () => {
  return db.query(`SELECT * FROM companies`);
};

// Return one company with the specific id
Company.findById = id => {
  return db.oneOrNone(
    `
      SELECT * FROM companies
      WHERE id = $1
    `,
    [id]
  );
};

// Export the Company object
module.exports = Company;
