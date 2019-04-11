import React, { Component } from "react";
import { withCookies } from "react-cookie";
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
          <Route
            exact
            path="/company"
            render={() => <CompanyHome cookies={this.props.cookies} />}
          />
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
