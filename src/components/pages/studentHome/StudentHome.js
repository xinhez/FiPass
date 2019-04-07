import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Tab, Tabs, Typography } from "@material-ui/core";
import Link from "@material-ui/icons/Link";
import LocationOn from "@material-ui/icons/LocationOn";
import CompanyList from "./CompanyList";
import CompanyFilter from "./CompanyFilter";
import PositionList from "./PositionList";
import background from "../../img/background.png";
import { fetchCompanies } from "../../../actions/company";
import "../../common/Home.css";
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
    console.log(nextProps);
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
    const { error, loading, companies } = this.props;

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
        <CompanyFilter
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
                <LocationOn className="subtitle-icon" color="textSecondary" />
                <Typography
                  className="subtitle studentHome-subtitle-text"
                  variant="subheading"
                >
                  {selectedCompany.location}
                </Typography>
                {selectedCompany.url && (
                  <div className="studentHome-subtitle-container">
                    <Link className="subtitle-icon" color="textSecondary" />
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
    // companies: {
    //   all: [
    //     {
    //       id: 1,
    //       user_id: 1,
    //       name: "test company 1",
    //       location: "Pittsburgh, PA",
    //       banner_img: null,
    //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //       contact_name: "testperson",
    //       active: true,
    //       created_at: "2019-04-07T04:28:17.799Z",
    //       updated_at: "2019-04-07T04:28:17.799Z",
    //       url: "https://www.test.com",
    // "positions": [
    //     {
    //       "id": 1,
    //       "name": "software engineer",
    //       "job_type": "fulltime",
    //       "location": null,
    //       "application_deadline": null,
    //       "description": null
    //     }
    //   ]
    //     },
    //     {
    //       id: 2,
    //       user_id: 2,
    //       name: "test company 2",
    //       location: "Pittsburgh, PA",
    //       banner_img: null,
    //       description: "placeholder",
    //       contact_name: "testperson",
    //       active: true,
    //       created_at: "2019-04-07T04:28:17.799Z",
    //       updated_at: "2019-04-07T04:28:17.799Z",
    //       url: null
    //     },
    //     {
    //       id: 3,
    //       user_id: 3,
    //       name: "test company 3",
    //       location: "Pittsburgh, PA",
    //       banner_img: null,
    //       description: "placeholder",
    //       contact_name: "testperson",
    //       active: true,
    //       created_at: "2019-04-07T04:28:17.799Z",
    //       updated_at: "2019-04-07T04:28:17.799Z",
    //       url: null
    //     }
    //   ],
    //   other: [
    //     {
    //       id: 4,
    //       user_id: 4,
    //       name: "test company 4",
    //       location: "Pittsburgh, PA",
    //       banner_img: null,
    //       description: "placeholder",
    //       contact_name: "testperson",
    //       active: true,
    //       created_at: "2019-04-07T04:28:17.799Z",
    //       updated_at: "2019-04-07T04:28:17.799Z",
    //       url: null
    //     }
    //   ]
    // },
    companies: state.company.companies || {},
    loading: state.company.fetchingCompanies,
    error: state.company.error || state.user.error
  };
};

export default connect(mapStateToProps)(StudentHome);
