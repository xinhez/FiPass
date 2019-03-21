// src/components/Home.js

// Import react
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/companywelcome.css";
import LoginFormCom from "./LoginFormCom.js";

class CompanyWelcome extends Component {
  render() {
    return (
      <div className="CompanyWelcome">
        <LoginFormCom />
      </div>
    );
  }
}

export default CompanyWelcome;
