import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyWelcome from "./pages/CompanyWelcome";
import StudentWelcome from "./pages/StudentWelcome";
import Student from "./Student";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={StudentWelcome} />
          <Route exact path="/employer" component={CompanyWelcome} />
          <Route exact path="/student/:student_id" component={Student} />
        </div>
      </Router>
    );
  }
}

export default App;
