import React, { Component } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import logo from "../../test-img/test-logo.jpg";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./CompanyList.css";

class CompanyList extends Component {
  renderCompanies() {
    const { companies, selectedCompany } = this.props;
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
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="companyList-card-subtitle"
            >
              {company.location}
            </Typography>
            <Typography
              variant="body1"
              className="companyList-card-description"
            >
              {company.description}
            </Typography>
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
  onSelectedCompanyChange: PropTypes.func.isRequired
};

export default CompanyList;
