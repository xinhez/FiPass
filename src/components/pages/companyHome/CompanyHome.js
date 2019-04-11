import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Typography } from "@material-ui/core";
import CompanyLogIn from "./CompanyLogIn";
import StudentList from "./StudentList";
import FilterBar from "../../common/FilterBar";
import { fetchApplications } from "../../../actions/application";
import { fetchStudents } from "../../../actions/student";
import { fetchTags } from "../../../actions/tag";
import { loginUserFromCookie, USER_ROLE_COMPANY } from "../../../actions/user";
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

    const cookies = this.props.cookies;
    if (cookies !== null) {
      const id = parseInt(cookies.get("id"));
      const token = cookies.get("token");
      const role = cookies.get("role") == "true";
      if (
        typeof id === "number" &&
        typeof token === "string" &&
        role === USER_ROLE_COMPANY
      ) {
        this.props.dispatch(
          loginUserFromCookie({ id, auth_token: token, role })
        );
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      typeof this.props.token !== "string" &&
      typeof nextProps.token === "string"
    ) {
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

    const { cookies, id, token, role } = nextProps;
    const idCookie = cookies.get("id");
    const roleCookie = cookies.get("role");
    const tokenCookie = cookies.get("token");
    if (
      typeof id === "number" &&
      typeof role === "boolean" &&
      typeof token === "string"
    ) {
      const noCookie =
        idCookie === undefined &&
        roleCookie === undefined &&
        tokenCookie === undefined;
      const newCookie =
        id !== parseInt(idCookie) ||
        (role ? roleCookie !== "true" : roleCookie !== "false") ||
        token !== tokenCookie;
      if (noCookie || newCookie) {
        cookies.remove("id");
        cookies.set("id", id, { path: "/company", maxage: 7200 });
        cookies.remove("role");
        cookies.set("role", role, { path: "/company", maxage: 7200 });
        cookies.remove("token");
        cookies.set("token", token, { path: "/company", maxage: 7200 });
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
    const {
      id,
      role,
      token,
      error,
      loading,
      students,
      applications,
      tags
    } = this.props;
    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (
      typeof id !== "number" ||
      typeof role != "boolean" ||
      typeof token !== "string"
    ) {
      return <CompanyLogIn />;
    }

    if (loading || filters === null) {
      return <div>loading...</div>;
    }
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
                <div className="Card-centered CompanyHome-card">
                  <img
                    className="Profile-avatar Image-avatar CompanyHome-profile-top"
                    alt="Student Avatar"
                    src={selectedStudent.avatar || avatar}
                  />
                  <Typography variant="title">
                    {selectedStudent.first_name} {selectedStudent.last_name}
                  </Typography>
                  <Typography className="subtitle" variant="subtitle2">
                    {typeof selectedStudent.major_2 === "string" &&
                    selectedStudent.major_2.length > 0
                      ? `${selectedStudent.major_1} | ${
                          selectedStudent.major_2
                        }`
                      : `${selectedStudent.major_1}`}
                  </Typography>
                  <Typography
                    className="CompanyHome-profile-bottom"
                    variant="caption"
                  >
                    {selectedStudent.school}, {selectedStudent.graduation_year}
                  </Typography>
                  <div className="CompanyHome-card-box">
                    <div className="CompanyHome-card-inner-left">
                      {selectedStudent.skills && (
                        <Card className="Box-no-shadow">
                          <Typography variant="headline">Skills</Typography>
                          <Typography variant="caption">
                            {selectedStudent.skills
                              .map(skill => skill.name)
                              .join(", ")}
                          </Typography>
                        </Card>
                      )}
                      <Card className="Box-no-shadow">
                        <Typography variant="headline">Resume</Typography>
                      </Card>
                    </div>
                    <div className="CompanyHome-card-inner-right">
                      <Card className="Box-no-shadow CompanyHome-card-column">
                        <Typography variant="headline">Tags</Typography>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    applications: state.application.applications,
    id: state.user.id,
    role: state.user.role,
    token: state.user.token,
    students: state.student.students,
    loading: state.student.fetchingStudents,
    error: state.student.error,
    tags: state.tag.tags,
    cookies: ownProps.cookies
  };
};

export default connect(mapStateToProps)(CompanyHome);
