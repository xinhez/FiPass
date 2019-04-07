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
import Fipass from "../test-img/FiPass.png";
import heart from "../test-img/heart.png";
import locationImg from "../test-img/location.png";
import background from "../test-img/background.png";
import linkImg from "../test-img/link.png";
import CompanyCard from "./CompanyCard.js";
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
    // color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  left: {
    left: "30px"
  },
  root: {
    background: "#FFFFFF",
    "box-shadow": "0px 2px 10px rgba(0, 0, 0, 0.05)"
  },
  nomargin: {
    margin: 0
  }
});

class Topbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.nomargin}>
          <Grid item xs={3}>
            <Button className={classes.left} href="/StudentWelcome">
              <img src={Fipass} alt="logo" />
            </Button>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={3}>
            <LoginFormStu />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Topbar);
// export default StudentWelcome;
