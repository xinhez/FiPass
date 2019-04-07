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
import Topbar from "./Topbar.js";
import Companybar from "./Companybar.js";
import CompanyDetailContent from "./CompanyDetailContent.js";
import LoginFormStu from "./LoginFormStu.js";
import { Paper, Grid, Button, withStyles, ButtonBase } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
// import ReactScrollbar from 'react-scrollbar-js';
// import { fetchCompanies } from "../../actions/student";
const styles = theme => ({
  root: {
    "margin-right": "2%"
  },
  ulmargin: {
    "margin-top": 0
  },
  CompanyList: {
    float: "left",
    width: "30%",
    height: "100%"
  },
  myScrollbar: {
    width: 400,
    height: 400
  }
});

class CompanyList extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchCompanies());
  // }
  /*
  <CompanyCard
        key={company.id}
        id={company.id}
        imgSrc={logo}
        heartSrc={heart}
        name={company.name}
        location={company.location}
        locationImg={locationImg}
        description={company.description}
      />
   */

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
  }

  renderCompanies(companies) {
    console.log("this.props.selectedCompanyID:", this.props.selectedCompanyID);
    const { classes } = this.props;
    const listItems = companies.map(company =>
      this.renderCompanyCards(
        company.user_id,
        company.name,
        company.location,
        company.description,
        String(this.props.selectedCompanyID) == String(company.id)
          ? true
          : false
      )
    );

    return (
      <ul className={classes.ulmargin}>
        <PerfectScrollbar>{listItems}</PerfectScrollbar>
      </ul>
    );
  }
  renderCompanyCards(id_, name_, location_, description_, condition_) {
    console.log("condition:", condition_, "id:", id_);
    return (
      // <ButtonBase onClick={(e) => this.handleClick(id_, e)}>
      <CompanyCard
        key={id_}
        id={id_}
        imgSrc={logo}
        heartSrc={heart}
        name={name_}
        location={location_}
        locationImg={locationImg}
        description={description_}
        changeSelected={this.props.changeSelected}
        condition={condition_}
        changeState={this.props.changeState}
      />
      // </ButtonBase>
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
    /*
    {this.renderCompanyCards(
      1,
      "Google",
      "San Francisco",
      "Technical Solution Specialist Intern Digital Sales Intern"
    )} 
     */

    const { classes } = this.props;
    return (
      <div className={this.props.className}>
        {this.renderCompanies(this.props.companies)}
      </div>
    );
  }
}

CompanyList.propTypes = {
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

  renderCompanyDetail(
    id_,
    name_,
    location_,
    description_,
    linkUrl_,
    positions_
  ) {
    const { classes } = this.props;
    return (
      <CompanyDetailContent
        id={id_}
        classes={classes}
        imgSrc={background}
        heartSrc={heart}
        name={name_}
        location={location_}
        locationImg={locationImg}
        linkImg={linkImg}
        linkUrl={linkUrl_}
        description={description_}
        positions={positions_}
        likePosition={this.props.likePosition}
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
    const { selectedCompanyInfo } = this.props;
    console.log("Content", this.props);

    return (
      <div classes={classes.root}>
        <CompanyList
          className={classes.CompanyList}
          classes={classes}
          selectedCompanyID={this.props.selectedCompanyID}
          companies={this.props.companies}
          changeSelected={this.props.changeSelected}
        />
        {this.renderCompanyDetail(
          selectedCompanyInfo.user_id,
          selectedCompanyInfo.name,
          selectedCompanyInfo.location,
          selectedCompanyInfo.description,
          selectedCompanyInfo.linkUrl,
          selectedCompanyInfo.positions
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
