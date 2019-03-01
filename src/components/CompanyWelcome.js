// src/components/Home.js

// Import react
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/companywelcome.css";

class NameForm extends Component {
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
      <div>
        <p> Welcome </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class CompanyWelcome extends Component {
  render() {
    return (
      <div className="CompanyWelcome">
        <NameForm />
      </div>
    );
  }
}

export default CompanyWelcome;
