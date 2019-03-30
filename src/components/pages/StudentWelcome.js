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
import Content from "./Content.js";
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

class StudentWelcome extends Component {
  // props function pass way
  //

  constructor() {
    super();
    this.state = {
      companies: [
        {
          id: 1,
          name: "Google Inc.",
          location: "San Francisco, CA, USA",
          jd: "software engineer intern",
          linkUrl: "https://www.google.com"
        },
        {
          id: 2,
          name: "Facebook Inc.",
          location: "Melon Park, CA, USA",
          jd: "software engineer intern",
          linkUrl: "https://www.fb.com"
        },
        {
          id: 3,
          name: "Apple Inc.",
          location: "Sunnyvale, CA, USA",
          jd: "software engineer intern",
          linkUrl: "https://www.apple.com"
        }
      ],
      selectedCompanyID: 0,
      selectedCompanyInfo: {
        id: 3,
        name: "Google Inc.",
        location: "San Francisco, CA, USA",
        jd: "software engineer intern",
        linkUrl: "https://www.Google.com",
        positions: [
          {
            percent: "70",
            id: 1,
            role: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            jd:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio."
          },
          {
            percent: "70",
            id: 2,
            role: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            jd:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio."
          }
        ]
      }
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.likePosition = this.likePosition.bind(this);
  }

  changeSelected(id) {
    console.log("changeSelected to id", id);
    this.setState((state, id) => ({
      selectedCompanyID: id
    }));

    // const selectedCompanyInfo = {name:"Facebook Inc.",
    //       location:"San Francisco, CA, USA",
    //       jd:"software engineer intern",
    //       linkUrl:"https://www.facebook.com"};
    this.setState((state, selectedCompanyInfo) => ({
      selectedCompanyInfo: {
        id: 3,
        name: "Facebook Inc.",
        location: "San Francisco, CA, USA",
        jd: "software engineer intern",
        linkUrl: "https://www.facebook.com",
        positions: [
          {
            percent: "70",
            id: 1,
            role: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            jd:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio."
          },
          {
            percent: "70",
            id: 2,
            role: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            jd:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio."
          }
        ]
      }
    }));
  }

  changeFilter(filter) {
    console.log("changeFilter", filter);
  }

  likePosition(company_id, position_id) {
    console.log("company_id", company_id, "position_id", position_id);
  }
  render() {
    console.log("company info", this.state.selectedCompanyInfo);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Topbar />
        <Companybar changeFilter={this.changeFilter} />
        <Content
          changeSelected={this.changeSelected}
          likePosition={this.likePosition}
          companies={this.state.companies}
          selectedCompanyInfo={this.state.selectedCompanyInfo}
        />
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
StudentWelcome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(StudentWelcome);
// export default StudentWelcome;
