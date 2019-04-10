import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Tab, Tabs, Typography } from "@material-ui/core";
import { Link, LocationOn } from "@material-ui/icons";
import CompanyList from "./CompanyList";
import PositionList from "./PositionList";
import FilterBar from "../../common/FilterBar";
import background from "../../img/background.png";
import { fetchCompanies } from "../../../actions/company";
import "../../common/Component.css";
import "./StudentHome.css";

class StudentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompany: null,
      selectedFilter: "all",
      selectedTab: 0
    };
    this.onSelectedCompanyChange = this.onSelectedCompanyChange.bind(this);
    this.onSelectedFilterChange = this.onSelectedFilterChange.bind(this);
    this.onSelectedTabChange = this.onSelectedTabChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.selectedCompany === null &&
      nextProps.companies !== null &&
      Array.isArray(nextProps.companies["all"]) &&
      nextProps.companies["all"].length > 0
    ) {
      this.setState({ selectedCompany: nextProps.companies["all"][0] });
    }
  }

  onSelectedCompanyChange(selectedCompany) {
    this.setState({ selectedCompany });
  }

  onSelectedFilterChange(selectedFilter) {
    this.setState({ selectedFilter });
  }

  onSelectedTabChange(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { selectedCompany, selectedFilter, selectedTab } = this.state;
    const { error, loading, companies, id } = this.props;

    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (loading || selectedCompany === null) {
      return <div>loading...</div>;
    }

    // TODO(xinhez) Get liked positions by user id.
    var likedPositions = [1];

    return (
      <div className="Home">
        <FilterBar
          filters={companies}
          onSelectedFilterChange={this.onSelectedFilterChange}
          selectedFilter={selectedFilter}
        />
        <div className="Home-body">
          <div className="Home-left">
            <CompanyList
              companies={companies[selectedFilter]}
              selectedCompany={selectedCompany || {}}
              onSelectedCompanyChange={this.onSelectedCompanyChange}
            />
          </div>
          <div className="Home-right">
            <Card className="Home-right-card">
              <img
                className="studentHome-img"
                alt="Company Overview"
                src={selectedCompany.banner_img || background}
              />
              <Typography className="studentHome-title" variant="title">
                {selectedCompany.name}
              </Typography>
              <div className="studentHome-subtitle studentHome-subtitle-container">
                <LocationOn className="subtitle-icon" />
                <Typography
                  className="subtitle studentHome-subtitle-text"
                  variant="subheading"
                >
                  {selectedCompany.location}
                </Typography>
                {selectedCompany.url && (
                  <div className="studentHome-subtitle-container">
                    <Link className="subtitle-icon" />
                    <a
                      className="studentHome-subtitle-link"
                      href={selectedCompany.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography
                        className="subtitle studentHome-subtitle-text"
                        variant="subheading"
                      >
                        {selectedCompany.url}
                      </Typography>
                    </a>
                  </div>
                )}
              </div>
              <Tabs
                classes={{
                  root: "studentHome-tabs",
                  indicator: "studentHome-tabsIndicator"
                }}
                value={selectedTab}
                onChange={(_, value) => this.onSelectedTabChange(value)}
              >
                <Tab disableRipple label="About" />
                <Tab disableRipple label="Position" />
              </Tabs>
              {selectedTab === 0 && (
                <div className="studentHome-selectedTab">
                  <Typography>{selectedCompany.description}</Typography>
                </div>
              )}
              {selectedTab === 1 && (
                <div className="studentHome-selectedTab">
                  <PositionList
                    id={id}
                    positions={selectedCompany.positions}
                    likedPositions={likedPositions}
                  />
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.company.companies || {},
    loading: state.company.fetchingCompanies,
    error: state.company.error || state.user.error,
    id: state.user.id
  };
};

export default connect(mapStateToProps)(StudentHome);
