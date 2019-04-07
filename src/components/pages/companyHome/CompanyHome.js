import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CompanyLogIn from "./CompanyLogIn";
import StudentList from "./StudentList";
import { fetchStudents } from "../../../actions/student";
import "../../common/Home.css";

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: null
    };
    this.onSelectedStudentChange = this.onSelectedStudentChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.token === null && nextProps.token !== null) {
      this.props.dispatch(fetchStudents(nextProps.token));
    }
    if (
      this.state.selectedStudent === null &&
      nextProps.students !== null &&
      nextProps.students.length > 0
    ) {
      this.setState({ selectedStudent: nextProps.students[0] });
    }
  }

  onSelectedStudentChange(selectedStudent) {
    this.setState({ selectedStudent });
  }

  render() {
    const { selectedStudent } = this.state;
    const { token, error, loading, students } = this.props;
    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (token === null) {
      return <CompanyLogIn />;
    }

    if (loading || selectedStudent === null) {
      return <div>loading...</div>;
    }

    return (
      <div className="Home">
        <div className="Home-body">
          <div className="Home-left">
            <StudentList
              students={students}
              selectedStudent={selectedStudent || {}}
              onSelectedStudentChange={this.onSelectedStudentChange}
            />
          </div>
          <div className="Home-right">
            <Card className="Home-right-card">
              <h1>
                {selectedStudent.first_name} {selectedStudent.last_name} Student
              </h1>
              <h2>TODO: swap in selected student information</h2>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token,
    students: state.student.students,
    loading: state.student.fetchingStudents,
    error: state.student.error
  };
};

export default connect(mapStateToProps)(CompanyHome);
