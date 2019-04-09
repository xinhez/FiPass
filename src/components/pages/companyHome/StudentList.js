import React, { Component } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, Typography } from "@material-ui/core";
import logo from "../../img/test-logo.jpg";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./StudentList.css";

class StudentList extends Component {
  renderStudents() {
    const { students, selectedStudent } = this.props;
    const studentCards = students.map(student => {
      var className = ["studentList-card"];
      if (selectedStudent.id === student.id) {
        className.push("studentList-card-selected");
      }
      return (
        <div key={student.id}>
          <Card
            className={className.join(" ")}
            onClick={_ => this.props.onSelectedStudentChange(student)}
          >
            <img
              className="studentList-card-logo"
              alt="Student Avatar"
              src={logo}
            />
            <Typography variant="subtitle1" className="studentList-card-title">
              {student.first_name} {student.last_name}
            </Typography>
            <Typography className="subtitle" variant="subtitle2">
              {student.major_1}
            </Typography>
            <Typography variant="body1">{student.school}</Typography>
          </Card>
        </div>
      );
    });
    return <PerfectScrollbar>{studentCards}</PerfectScrollbar>;
  }

  render() {
    return <div className="studentList">{this.renderStudents()}</div>;
  }
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  selectedStudent: PropTypes.object.isRequired,
  onSelectedStudentChange: PropTypes.func.isRequired
};

export default StudentList;
