import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import EmployerHome from "./components/pages/EmployerHome";
import StudentHome from "./components/pages/StudentHome";
import Student from "./components/Student";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={StudentHome} />
          <Route exact path="/employer" component={EmployerHome} />
          <Route exact path="/student/:id" component={Student} />
        </div>
      </Router>
    );
  }
}

export default App;
