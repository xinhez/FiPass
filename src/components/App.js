import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployerHome from "./pages/EmployerHome";
import StudentHome from "./pages/StudentHome";
import Student from "./Student";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={StudentHome} />
          <Route exact path="/employer" component={EmployerHome} />
          <Route exact path="/student/:student_id" component={Student} />
        </div>
      </Router>
    );
  }
}

export default App;
