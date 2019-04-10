import React, { Component } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, Typography } from "@material-ui/core";
import avatar from "../../img/avatar.png";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../common/Component.css";

class StudentList extends Component {
  renderStudents() {
    const { students, selectedStudent } = this.props;
    const studentCards = students.map(student => {
      var className = ["List-card"];
      if (selectedStudent.id === student.id) {
        className.push("List-card-selected");
      }
      return (
        <div key={student.id}>
          <Card
            className={className.join(" ")}
            onClick={_ => this.props.onSelectedStudentChange(student)}
          >
            <img
              className="List-card-logo Image-avatar"
              alt="Student Avatar"
              src={avatar}
            />
            <div className="List-card-body">
              <Typography variant="subtitle1" className="List-card-title">
                {student.first_name} {student.last_name}
              </Typography>
              <Typography className="subtitle" variant="subtitle2">
                {student.major_2 === null
                  ? `${student.major_1}`
                  : `${student.major_1} | ${student.major_2}`}
              </Typography>
              <Typography variant="caption">
                {student.school}, {student.graduation_year}
              </Typography>
            </div>
          </Card>
        </div>
      );
    });
    return <PerfectScrollbar>{studentCards}</PerfectScrollbar>;
  }

  render() {
    return <div className="List">{this.renderStudents()}</div>;
  }
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  selectedStudent: PropTypes.object.isRequired,
  onSelectedStudentChange: PropTypes.func.isRequired
};

export default StudentList;
