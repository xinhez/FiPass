/*
Top bar: logo (left)   |  (username email login signup) (right)
Company bar: second bar
Content: 
            Company List
                    company
                        Img |  3 lines
            Company detail
                    Img
                    CompanyXXX    |   send code
                    Location 
                    Company | position
                    detail
 */

// src/components/Home.js

// Import react
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/studentwelcome.css";
import logo from "../test-img/test-logo.jpg";

class Topbar extends Component {
  render() {
    return (
      <div className="Topbar">
        <img src={logo} className="left" alt="logo" />
        <LoginForm className="login-form right" />
      </div>
    );
  }
}

class Companybar extends Component {
  renderButton() {
    return <button className="button"> company xxx </button>;
  }
  render() {
    return (
      <div className="Companybar">
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
      </div>
    );
  }
}

class CompanyCard extends Component {
  render() {
    return (
      <div className="CompanyCard">
        <img src={logo} alt="logo" />
        <div className="CompanyCard-detail">
          <p>Company Name</p>
          <p>Location </p>
          <button> apply </button>
        </div>
      </div>
    );
  }
}

class CompanyList extends Component {
  renderCompanyCards() {
    return <CompanyCard />;
  }
  render() {
    return (
      <div className={this.props.className}>
        <ul>
          {this.renderCompanyCards()}
          {this.renderCompanyCards()}
          {this.renderCompanyCards()}
          {this.renderCompanyCards()}
          {this.renderCompanyCards()}
          {this.renderCompanyCards()}
        </ul>
      </div>
    );
  }
}
class CompanyDetail extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={logo} alt="logo" />
        <div className="CompanyDetail-name">
          <div className="inline">
            <p>CompanyXXX</p>
            <p>Location</p>
          </div>
          <button className="right">Apply</button>
        </div>
        <div>
          <button>Company</button>
          <button>Position</button>
        </div>
        <div className="CompanyDetail-content">
          <p>Content</p>
        </div>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <CompanyList className="CompanyList" />
        <CompanyDetail className="CompanyDetail" />
      </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={this.props.className}>
        <form className="studentloginform" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <button href="google.com">singup</button>
      </div>
    );
  }
}

class StudentWelcome extends Component {
  render() {
    return (
      <div className="StudentWelcome">
        <Topbar />
        <Companybar />
        <Content />
      </div>
    );
  }
}

export default StudentWelcome;
