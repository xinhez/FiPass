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
  root: {
    "margin-right": 30
  },
  ulmargin: {
    "margin-top": 0
  },
  CompanyList: {
    float: "left",
    width: "30%",
    height: "100%"
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
    const { classes } = this.props;
    return (
      <div className={this.props.className}>
        <ul className={classes.ulmargin}>
          {this.renderCompanyCards(
            1,
            "Google",
            "San Francisco",
            "Technical Solution Specialist Intern Digital Sales Intern"
          )}
          {this.renderCompanyCards(
            1,
            "Google",
            "San Francisco",
            "Technical Solution Specialist Intern Digital Sales Intern"
          )}
          {this.renderCompanyCards(
            1,
            "Google",
            "San Francisco",
            "Technical Solution Specialist Intern Digital Sales Intern"
          )}
          {this.renderCompanyCards(
            1,
            "Google",
            "San Francisco",
            "Technical Solution Specialist Intern Digital Sales Intern"
          )}
          {this.renderCompanyCards(
            1,
            "Google",
            "San Francisco",
            "Technical Solution Specialist Intern Digital Sales Intern"
          )}
          {this.renderCompanyCards(
            1,
            "Google",
            "San Francisco",
            "Technical Solution Specialist Intern Digital Sales Intern"
          )}
        </ul>
      </div>
    );
  }
}

CompanyList.propTypes = {
  classes: PropTypes.object.isRequired
};

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

CompanyDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

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
    const { classes } = this.props;
    return (
      <CompanyDetailContent
        classes={classes}
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
    const { classes } = this.props;
    return (
      <div classes={classes.root}>
        <CompanyList className={classes.CompanyList} classes={classes} />
        {this.renderCompanyDetail(
          "google",
          "San Francisco, CA, USA",
          "software engineer intern",
          "https://www.google.com"
        )}
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
