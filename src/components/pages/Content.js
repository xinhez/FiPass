import React, { Component } from "react";
import "../css/studentwelcome.css";
import logo from "../test-img/test-logo.jpg";
import heart from "../test-img/heart.png";
import locationImg from "../test-img/location.png";
import background from "../test-img/background.png";
import linkImg from "../test-img/link.png";
import CompanyCard from "./CompanyCard.js";
import CompanyDetailContent from "./CompanyDetailContent.js";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
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
  renderCompanies(companies) {
    console.log("this.props.selectedCompanyID:", this.props.selectedCompanyID);
    const { classes } = this.props;
    const listItems = companies.map(company =>
      this.renderCompanyCards(
        company.id,
        company.name,
        company.location,
        company.description,
        String(this.props.selectedCompanyID) === String(company.id)
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
          selectedCompanyInfo.id,
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

Content.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Content);
