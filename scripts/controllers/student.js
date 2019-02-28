// controllers/student.js

// Import the Student model.
const Student = require("../models/student");

// Instantiate the controller object
const studentController = {};

// Controller method for handling a request for all students
studentController.findAll = (req, res) => {
  // Uses the findAll method from Student
  Student.findAll()
    .then(students => {
      // Sends the students as a JSON object
      res.json({
        message: "Success",
        data: students
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({ err });
    });
};

// Controller method for handling a request for a single student
studentController.findById = (req, res) => {
  // Student method for finding by id, passes the id as an argument
  Student.findById(req.params.id)
    .then(student => {
      // Sends the student as a JSON object
      res.json({
        message: "Success",
        data: student
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({ err });
    });
};

// Export the controller
module.exports = studentController;
