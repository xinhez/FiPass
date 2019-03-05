import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStudents } from "../../actions/student";

class EmployerHome extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStudents());
  }

  render() {
    const { error, loading, students } = this.props;
    console.log(error, loading, students);

    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <h1>All Students</h1>
        {this.renderStudents(students)}
      </div>
    );
  }

  renderStudents(students) {
    return students.map(student => {
      return (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            {student.first_name} {student.last_name}
          </Link>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  console.log("mapping state", state);
  return {
    students: state.student.students,
    loading: state.student.fetchingStudents,
    error: state.student.error
  };
};

export default connect(mapStateToProps)(EmployerHome);
