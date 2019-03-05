import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployerHome extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      dataLoaded: false
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "/api/student"
    })
      .then(data => {
        this.setState({
          students: data.data.data,
          dataLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>All Students</h1>
        {this.renderStudents()}
      </div>
    );
  }

  renderStudents() {
    if (this.state.dataLoaded) {
      return this.state.students.map(student => {
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              {student.first_name} {student.last_name}
            </Link>
          </div>
        );
      });
    } else {
      <p>Loading...</p>;
    }
  }
}

export default EmployerHome;
