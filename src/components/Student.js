// src/components/Student.js

import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <h3>Student</h3>
        {this.renderStudent()}
        <Link to="/">Back to Students</Link>
      </div>
    )
  }
};

export default Student;
