import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentHeader from "../pages/studentHome/StudentHeader";
import CompanyHeader from "../pages/companyHome/CompanyHeader";
import logo from "../img/FiPass.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-left">
          <img src={logo} alt="FiPass" />
        </Link>
        <div className="header-right">
          <StudentHeader />
          <CompanyHeader />
        </div>
      </div>
    );
  }
}

export default Header;
