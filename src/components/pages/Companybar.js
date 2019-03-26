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
  marginleft: {
    "margin-left": "18px",
    width: "90%",
    padding: "10px 0"
  },
  root: {
    height: "10%"
  },
  button: {
    background: "#DCDCDC",
    "border-radius": "5px",
    width: "100%",
    margin: "1% 8px",
    height: "60%",

    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": 300,
    "font-size": "20px",
    "line-height": "normal",
    color: "#000000"
  }
  // first:{
  //   'margin': '1% 8px 1% 30px'
  // }
});

class Companybar extends Component {
  renderButton(string) {
    const { classes } = this.props;
    return (
      <Grid item xs={2}>
        <button className={classes.button}> {string} </button>
      </Grid>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.marginleft}>
          {this.renderButton("Internship")}
          {this.renderButton("Full-Time job")}
          {this.renderButton("Part-Time")}
          {this.renderButton("Liked Companies")}
        </Grid>
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
Companybar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Companybar);
// export default StudentWelcome;
