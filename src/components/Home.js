// src/components/Home.js

// Import react
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    // Define state
    this.state = {
      students: [],
      dataLoaded: false
    }
  }

  // Is called when the component succesfully loads
  componentDidMount() {
    // GET request to our server
    axios({
      method: 'GET',
      url: '/api/student'
    })
    // Saves the data to state. Only way to change the state is with setState
    .then(data => {
      this.setState({
        students: data.data.data,
        dataLoaded: true
      });
    })
    // logs an error
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="Home">
        <h1>Registered students</h1>
        {this.renderStudents()}
      </div>
    )
  }

  renderStudents() {
    if (this.state.dataLoaded) {
      return this.state.students.map(student => {
        return (
          <div key={student.id}>
            <p className="student_name">{student.first_name} {student.last_name}</p>
          </div>
        )
      })
    } else {
      <p>Loading...</p>
    }
  }
};

export default Home;
