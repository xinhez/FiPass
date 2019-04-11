import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Tab, Tabs, Typography } from "@material-ui/core";
import { Link, LocationOn } from "@material-ui/icons";
import CompanyList from "./CompanyList";
import PositionList from "./PositionList";
import FilterBar from "../../common/FilterBar";
import background from "../../img/background.png";
import { fetchCompanies } from "../../../actions/company";
import {
  fetchLikes,
  likePosition,
  deletelikePosition
} from "../../../actions/student";
import "../../common/Component.css";
import "./StudentHome.css";

class StudentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompany: null,
      selectedFilter: "all",
      selectedTab: 0,
      likes: null
    };
    this.onSelectedCompanyChange = this.onSelectedCompanyChange.bind(this);
    this.onSelectedFilterChange = this.onSelectedFilterChange.bind(this);
    this.onSelectedTabChange = this.onSelectedTabChange.bind(this);
    this.likePositions = this.likePositions.bind(this);
    this.getStudentLike = this.getStudentLike.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCompanies());
    // fetch like
    const student_id = this.props.id;
    this.props.dispatch(fetchLikes(this.props.token, student_id));
  }

  likePositions(position_id, is_like) {
    console.log("likePosition:", position_id, "is_like:", is_like);
    const student_id = this.props.id;
    const { likes } = this.props;
    if (is_like) {
      // post new like
      this.props.dispatch(
        likePosition(this.props.token, student_id, position_id)
      );
    } else {
      // delete like
      // find id by stu_id and position_id
      //
      var found = likes.find(function(like) {
        return like.student_id == student_id && like.position_id == position_id;
      });
      this.props.dispatch(deletelikePosition(this.props.token, found.id));
    }
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
    if (nextProps.updatingLikes != this.props.updatingLikes) {
      this.props.dispatch(fetchLikes(this.props.token, this.props.id));
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
  getStudentLike() {
    if (this.props.likes == null) {
      return;
    }
    const { likes } = this.props;
    var likesStu = [];
    for (var i = likes.length - 1; i >= 0; i--) {
      if (likes[i].student_id == this.props.id) {
        likesStu.push(likes[i]);
      }
    }
    return likesStu;
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
                    likedPositions={this.getStudentLike()}
                    likePosition={this.likePositions}
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
    updatingLikes:
      state.student.likePosition || state.student.deleteLikePosition,
    error: state.company.error || state.user.error,
    id: state.user.id,
    token: state.user.token,
    likes: state.student.likes
  };
};

export default connect(mapStateToProps)(StudentHome);
