import React, { Component } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import logo from "../../img/test-logo.jpg";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./CompanyList.css";

class CompanyList extends Component {
  renderCompanies() {
    const { companies, selectedCompany, selectedFilter } = this.props;
    const companyCards = companies.map(company => {
      var className = ["companyList-card"];
      if (selectedCompany.id === company.id) {
        className.push("companyList-card-selected");
      }
      return (
        <div key={company.id}>
          <Card
            className={className.join(" ")}
            onClick={_ => this.props.onSelectedCompanyChange(company)}
          >
            <img
              className="companyList-card-logo"
              alt="Company Logo"
              src={logo}
            />
            <Typography variant="subtitle1" className="companyList-card-title">
              {company.name}
            </Typography>
            <div className="companyList-card-location">
              <LocationOn className="subtitle-icon" />
              <Typography className="subtitle" variant="subheading">
                {company.location}
              </Typography>
            </div>
            {company.positions.map(position => (
              <Typography
                key={position.id}
                variant="body1"
                className="companyList-card-description"
              >
                {position.name}
              </Typography>
            ))}
          </Card>
        </div>
      );
    });
    return <PerfectScrollbar>{companyCards}</PerfectScrollbar>;
  }

  render() {
    return <div className="companyList">{this.renderCompanies()}</div>;
  }
}

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired,
  selectedCompany: PropTypes.object.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  onSelectedCompanyChange: PropTypes.func.isRequired
};

export default CompanyList;
