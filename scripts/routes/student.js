// routes/student.js

// Import express
const express = require('express');
// Define the router using the express router
const studentRouter = express.Router();

// Import the studentController
const studentController = require('../controllers/student');

// For each route access the correct controller method

// Request all students, send it to the / route
studentRouter.get('/', studentController.findAll);

// Request single student, send it to the /:id route
studentRouter.get('/:id', studentController.findById);

// Export the router
module.exports = studentRouter;
