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
import FiPass from "../test-img/FiPass.png";
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
import { fetchCompanies, fetchCompanyInfo } from "../../actions/company";
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
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  constructor() {
    super();
    this.state = {
      filter: "all",
      selectedCompanyID: null,
      selectedCompanyInfo: null
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.likePosition = this.likePosition.bind(this);
    this.getCompaniesBasedonFilter = this.getCompaniesBasedonFilter.bind(this);
  }

  changeSelected(id) {
    console.log("changeSelected to id", id);

    this.setState({
      selectedCompanyID: id,
      selectedCompanyInfo: this.props.allCompanies.all.find(
        company => company.user_id === id
      )
    });
  }

  changeFilter(filter) {
    // fulltime parttime intern liked
    console.log("changeFilter:", filter);
    if (filter === this.state.filter) {
      this.setState({ filter: "all" });
      return;
    }
    console.log("change filter to", filter);
    this.setState({ filter: filter });
  }
  getCompaniesBasedonFilter(filter) {
    if (filter == "fulltime") {
      return this.props.allCompanies.fulltime;
    } else if (filter == "parttime") {
      return this.props.allCompanies.parttime;
    } else if (filter == "intern") {
      return this.props.allCompanies.intern;
    } else if (filter == "liked") {
      return this.props.allCompanies.liked;
    } else {
      return this.props.allCompanies.all;
    }
  }
  componentWillReceiveProps(nextProps) {
    // Load new data when the dataSource property changes.
    console.log(
      "nextProps.fetchingCompanies,",
      nextProps.fetchingCompanies,
      "this.props.fetchingCompanies",
      this.props.fetchingCompanies
    );
    if (
      !nextProps.fetchingCompanies &&
      nextProps.fetchingCompanies != this.props.fetchingCompanies
    ) {
      console.log("componentWillReceiveProps");
      console.log("nextProps", nextProps);
      this.setState({
        selectedCompanyID: nextProps.allCompanies.all[0].user_id,
        selectedCompanyInfo: nextProps.allCompanies.all[0]
      });
      this.changeFilter("all");
    }
  }

  likePosition(company_id, position_id) {
    // stu_id, position_id
    console.log("company_id", company_id, "position_id", position_id);
    this.props.dispatch();
  }
  render() {
    console.log("this.state.selectedCompanyID", this.state.selectedCompanyID);
    const { classes } = this.props;
    const { error, fetchCompanies, allCompanies } = this.props;

    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (fetchCompanies || this.state.selectedCompanyID == null) {
      return <div> Loading... </div>;
    }
    console.log(this.props);
    console.log(this.state);
    // return <div> Loading </div>;

    return (
      <div className={classes.root}>
        <Topbar />
        <Companybar
          changeFilter={this.changeFilter}
          filter={this.state.filter}
        />
        <Content
          // user_id={this.props.id}
          selectedCompanyID={this.state.selectedCompanyID}
          changeSelected={this.changeSelected}
          likePosition={this.likePosition}
          companies={this.getCompaniesBasedonFilter(this.state.filter)}
          selectedCompanyInfo={this.state.selectedCompanyInfo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapping state", state);
  return {
    // id: state.user.id,
    // token: state.user.token,
    // role: state.user.role,
    id: 1,
    token: "asdf",
    role: 1,

    allCompanies: state.company.companies,
    fetchingCompanies: state.company.fetchingCompanies,
    error: state.company.error
  };
};

StudentWelcome.propTypes = {
  classes: PropTypes.object.isRequired
};
// export default withStyles(styles)(StudentWelcome);
export default connect(mapStateToProps)(withStyles(styles)(StudentWelcome));
// export default StudentWelcome;
