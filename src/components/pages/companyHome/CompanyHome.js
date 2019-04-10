import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Typography } from "@material-ui/core";
import CompanyLogIn from "./CompanyLogIn";
import StudentList from "./StudentList";
import FilterBar from "../../common/FilterBar";
import { fetchApplications } from "../../../actions/application";
import { fetchStudents } from "../../../actions/student";
import { fetchTags } from "../../../actions/tag";
import avatar from "../../img/avatar.png";
import "../../common/Component.css";
import "./CompanyHome.css";

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: null,
      selectedFilter: "All",
      filters: null
    };
    this.onSelectedFilterChange = this.onSelectedFilterChange.bind(this);
    this.onSelectedStudentChange = this.onSelectedStudentChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.token === null && nextProps.token !== null) {
      this.props.dispatch(fetchApplications(nextProps.token));
      this.props.dispatch(fetchStudents(nextProps.token));
      this.props.dispatch(fetchTags(nextProps.token));
    }
    if (
      this.props.applications != nextProps.applications ||
      this.props.students != nextProps.students ||
      this.props.tags != nextProps.tags
    ) {
      const { applications, students, tags } = nextProps;
      const applicationIds = new Set(
        applications.map(application => application.student_id)
      );
      var filters = {
        All: students.filter(student => applicationIds.has(student.id))
      };
      tags.forEach(tag => (filters[tag.name] = tag.students));
      this.setState({ filters });
      if (this.state.selectedStudent === null && filters["All"].length > 0) {
        this.setState({ selectedStudent: filters["All"][0] });
      }
    }
  }

  onSelectedFilterChange(selectedFilter) {
    this.setState({ selectedFilter });
  }

  onSelectedStudentChange(selectedStudent) {
    this.setState({ selectedStudent });
  }

  render() {
    const { selectedStudent, selectedFilter, filters } = this.state;
    const { token, error, loading, students, applications, tags } = this.props;
    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (token === null) {
      return <CompanyLogIn />;
    }

    if (loading || filters === null) {
      return <div>loading...</div>;
    }
    console.log(selectedStudent);
    return (
      <div className="Home">
        <FilterBar
          filters={filters}
          onSelectedFilterChange={this.onSelectedFilterChange}
          selectedFilter={selectedFilter}
        />
        <div className="Home-body">
          <div className="Home-left">
            <StudentList
              students={filters[selectedFilter]}
              selectedStudent={selectedStudent || {}}
              onSelectedStudentChange={this.onSelectedStudentChange}
            />
          </div>
          <div className="Home-right">
            <Card className="Home-right-card">
              {selectedStudent && (
                <div className="Card-centered">
                  <img
                    className="Profile-avatar Image-avatar"
                    alt="Student Avatar"
                    src={selectedStudent.avatar || avatar}
                  />
                  <Typography variant="title">
                    {selectedStudent.first_name} {selectedStudent.last_name}
                  </Typography>
                  <Typography className="subtitle" variant="subtitle2">
                    {selectedStudent.major_2 === null
                      ? `${selectedStudent.major_1}`
                      : `${selectedStudent.major_1} | ${
                          selectedStudent.major_2
                        }`}
                  </Typography>
                  <Typography variant="caption">
                    {selectedStudent.school}, {selectedStudent.graduation_year}
                  </Typography>
                  <div>
                    <div>
                      {selectedStudent.skills && (
                        <Card>
                          <Typography variant="headline">Skills</Typography>
                          <Typography variant="caption">
                            {selectedStudent.skills
                              .map(skill => skill.name)
                              .join(", ")}
                          </Typography>
                        </Card>
                      )}
                      <Card>
                        <Typography variant="headline">Resume</Typography>
                      </Card>
                    </div>
                    <Card>
                      <Typography variant="headline">Tags</Typography>
                    </Card>
                  </div>
                </div>
              )}
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
    applications: state.application.applications,
    token: state.user.token,
    students: state.student.students,
    loading: state.student.fetchingStudents,
    error: state.student.error,
    tags: state.tag.tags
  };
};

export default connect(mapStateToProps)(CompanyHome);
