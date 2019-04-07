import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyHome from "./components/pages/companyHome/CompanyHome";
import StudentHome from "./components/pages/studentHome/StudentHome";
import Header from "./components/common/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={StudentHome} />
          <Route exact path="/company" component={CompanyHome} />
        </div>
      </Router>
    );
  }
}

export default App;
