// models/student.js

// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the fipass-app database.
// Specifically, the students table.
const Student = {};

// Define methods for the Student object

// Returns all students from the table
Student.findAll = () => {
  return db.query(
    `SELECT * FROM students`
  );
};

// Return one student with the specific id
Student.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM students
      WHERE id = $1
    `,
    [id]
  );
};

// Export the Student object
module.exports = Student;
