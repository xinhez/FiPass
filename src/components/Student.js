import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Student extends Component {
  renderStudent() {
    const student = this.props.student;
    return (
      <div>
        <p className="student_name">
          {student.first_name} {student.last_name}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="Student">
        <h3>Student</h3>
        {this.renderStudent()}
        <Link to="/employer">Back to Students</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let id = ownProps.match.params.student_id;
  return {
    student: state.student.students.find(student => student.id === id)
  };
};

export default connect(mapStateToProps)(Student);
