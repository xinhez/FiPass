// src/App.js

// Import react and the component class
import React, { Component } from "react";
// Import BrowserRouter
import { BrowserRouter as Router, Route } from "react-router-dom";

// import each component
import Home from "./components/Home";
import Student from "./components/Student";
import StudentSettings from "./components/StudentSettings";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Student} />
          <Route exact path="/student_settings" component={StudentSettings} />
        </div>
      </Router>
    );
  }
}

// Export the App component
export default App;
