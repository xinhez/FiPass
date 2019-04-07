import React, { Component } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import logo from "../../test-img/test-logo.jpg";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./StudentList.css";

class StudentList extends Component {
  renderStudents() {
    const { students, selectedStudent } = this.props;
    const studentCards = students.map(student => {
      console.log("student", student);
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
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="studentList-card-subtitle"
            >
              {student.major_1}
            </Typography>
            <Typography
              variant="body1"
              className="studentList-card-description"
            >
              {student.school}
            </Typography>
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
