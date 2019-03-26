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
import Fipass from "../test-img/Fipass.png";
import heart from "../test-img/heart.png";
import locationImg from "../test-img/location.png";
import background from "../test-img/background.png";
import linkImg from "../test-img/link.png";
import CompanyCard from "./CompanyCard.js";
import Topbar from "./Topbar.js";
import Companybar from "./Companybar.js";
import CompanyDetailContent from "./CompanyDetailContent.js";
import LoginFormStu from "./LoginFormStu.js";
import { Paper, Grid, Button, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { fetchCompanies } from "../../actions/student";
const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  root: {
    background: "#E5E5E5"
  }
});

class CompanyList extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchCompanies());
  // }
  // renderCompanies(companies){
  //   return companies.map(company => {
  //     return this.renderCompanyCards(company.id, company.name, company.location, company.jd);
  //   });
  // }
  renderCompanyCards(id_, name_, location_, jd_) {
    return (
      <CompanyCard
        id={id_}
        imgSrc={logo}
        heartSrc={heart}
        name={name_}
        location={location_}
        locationImg={locationImg}
        jd={jd_}
      />
    );
  }

  render() {
    // const { error, loading, students } = this.props;
    // console.log(error, loading, students);

    // if (error) {
    //   return <div>Error {error.message}</div>;
    // }

    // if (loading) {
    //   return <div>loading...</div>;
    // }

    return (
      <div className={this.props.className}>
        <ul>
          {this.renderCompanyCards(
            1,
            "google",
            "MTV",
            "software engineer intern"
          )}
          {this.renderCompanyCards(
            2,
            "google",
            "MTV",
            "software engineer intern"
          )}
          {this.renderCompanyCards(
            2,
            "google",
            "MTV",
            "software engineer intern"
          )}
          {this.renderCompanyCards(
            2,
            "google",
            "MTV",
            "software engineer intern"
          )}
          {this.renderCompanyCards(
            2,
            "google",
            "MTV",
            "software engineer intern"
          )}
          {this.renderCompanyCards(
            2,
            "google",
            "MTV",
            "software engineer intern"
          )}
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
        s
        <div className="CompanyDetail-content">
          <p>Content</p>
        </div>
      </div>
    );
  }
}

class Content extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchCompany(this.props.id));
  // }
  // renderCompanies(companies){
  //   return companies.map(company => {
  //     return this.renderCompanyDetail(xxxx);
  //   });
  // }

  renderCompanyDetail(name_, location_, jd_, linkUrl_) {
    return (
      <CompanyDetailContent
        imgSrc={background}
        heartSrc={heart}
        name={name_}
        location={location_}
        locationImg={locationImg}
        linkImg={linkImg}
        linkUrl={linkUrl_}
        jd={jd_}
      />
    );
  }
  render() {
    // const { error, loading, students } = this.props;
    // console.log(error, loading, students);

    // if (error) {
    //   return <div>Error {error.message}</div>;
    // }

    // if (loading) {
    //   return <div>loading...</div>;
    // }

    return (
      <div>
        <CompanyList className="CompanyList" />
        {this.renderCompanyDetail(
          "google",
          "MTV",
          "software engineer intern",
          "https://www.google.com"
        )}
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

// const mapStateToProps = state => {
//   console.log("mapping state", state);
//   return {
//     students: state.company.companies,
//     loading: state.company.fetchingCompanies,
//     error: state.company.error
//   };
// };
// export default connect(mapStateToProps)(StudentWelcome);
//
Content.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Content);
// export default StudentWelcome;
