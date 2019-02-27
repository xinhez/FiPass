// src/components/Student.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      student: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    // Use string interpolation to get the id from the URL
    axios({
      method: 'GET',
      url: `/api/student/${this.props.match.params.id}`
    })
    .then(data => {
      this.setState({
        student: data.data.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderStudent() {
    const student = this.state.student;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p className="student_name">{student.first_name} {student.last_name}</p>
        </div>
      )
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="Student">
        <h3>Displaying student</h3>
        {this.renderStudent()}
        <Link to="/">Back to Students</Link>
      </div>
    )
  }
};

export default Student;
