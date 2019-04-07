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
import React, { Component } from "react";
import "../css/studentwelcome.css";
import Content from "./Content.js";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
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
  }
});

class StudentWelcome extends Component {
  // props function pass way
  componentDidMount() {
    // this.props.dispatch(fetchCompanies());
    this.changeFilter("all");
    console.log(this.state.allCompanies.all[0]);
    const { id } = this.state.allCompanies.all[0];
    // this.props.dispatch(fetchCompanyInfo(id));
    this.setState({ selectedCompanyID: id });

    this.setState({ loading: false });
  }

  constructor() {
    super();
    this.state = {
      filter: null,
      loading: true,
      allCompanies: {
        all: [
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          },
          {
            id: 3,
            name: "Apple Inc.",
            location: "Sunnyvale, CA, USA",
            description: "software engineer intern"
          },
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          },
          {
            id: 3,
            name: "Apple Inc.",
            location: "Sunnyvale, CA, USA",
            description: "software engineer intern"
          },
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          },
          {
            id: 3,
            name: "Apple Inc.",
            location: "Sunnyvale, CA, USA",
            description: "software engineer intern"
          }
        ],
        intern: [
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          }
        ],
        fulltime: [
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          }
        ],
        parttime: [
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          }
        ],
        liked: [
          {
            id: 1,
            name: "Google Inc.",
            location: "San Francisco, CA, USA",
            description:
              "software engineer intern;software engineer intern;software engineer intern"
          },
          {
            id: 2,
            name: "Facebook Inc.",
            location: "Melon Park, CA, USA",
            description: "software engineer intern"
          }
        ]
      },
      companies: null,
      selectedCompanyID: 1,
      selectedCompanyInfo: {
        id: 3,
        name: "Google Inc.",
        location: "San Francisco, CA, USA",
        description: "software engineer intern",
        linkUrl: "https://www.Google.com",
        positions: [
          {
            percent: "70",
            id: 1,
            name: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            description:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio.",
            liked: true
          },
          {
            percent: "70",
            id: 2,
            name: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            description:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio.",
            liked: false
          },
          {
            percent: "70",
            id: 1,
            name: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            description:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio.",
            liked: false
          },
          {
            percent: "70",
            id: 2,
            name: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            description:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio.",
            liked: false
          }
        ]
      }
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.likePosition = this.likePosition.bind(this);
  }

  changeSelected(id) {
    console.log("changeSelected to id", id);
    this.setState({
      selectedCompanyID: id
    });
    // this.props.dispatch(fetchCompanyInfo(id));
    this.setState((state, selectedCompanyInfo) => ({
      selectedCompanyInfo: {
        id: id,
        name: "Facebook Inc.",
        location: "San Francisco, CA, USA",
        description: "software engineer intern",
        linkUrl: "https://www.facebook.com",
        positions: [
          {
            percent: "70",
            id: 1,
            name: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            description:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio.",
            liked: true
          },
          {
            percent: "70",
            id: 2,
            name: "Lead UX Designer Lead Designer",
            location: "San Francisco, USA",
            description:
              "The team develops practical and innovative ways to address some of the most complex business challenges to keep Google thriving. We anticipate how decisions are made, persistently explore and uncover the business needs of our key clients and understand how our range of product and service offerings can enable their business success. Responsibilities: Design and implement global security programs and solutions for a varied and complex service portfolio.",
            liked: false
          }
        ]
      }
    }));
  }

  changeFilter(filter) {
    // fulltime parttime intern liked
    //
    //
    if (this.state.filter === filter) {
      this.setState({ filter: "all" });
      this.setState({ companies: this.state.allCompanies.all });
      return;
    }

    this.setState({ filter: filter });
    console.log("changeFilter", filter);
    if (filter === "fulltime") {
      this.setState({ companies: this.state.allCompanies.fulltime });
    } else if (filter === "parttime") {
      this.setState({ companies: this.state.allCompanies.parttime });
    } else if (filter === "intern") {
      this.setState({ companies: this.state.allCompanies.intern });
    } else if (filter === "liked") {
      this.setState({ companies: this.state.allCompanies.liked });
    } else {
      this.setState({ companies: this.state.allCompanies.all });
      console.log("this.state.companies", this.state.companies);
    }
  }

  likePosition(company_id, position_id) {
    // stu_id, position_id
    console.log("company_id", company_id, "position_id", position_id);
  }
  render() {
    console.log("this.state.selectedCompanyID", this.state.selectedCompanyID);
    const { classes } = this.props;
    if (this.state.loading) {
      return <div> Loading </div>;
    }
    return (
      <div className={classes.root}>
        <Content
          selectedCompanyID={this.state.selectedCompanyID}
          changeSelected={this.changeSelected}
          likePosition={this.likePosition}
          companies={this.state.companies}
          selectedCompanyInfo={this.state.selectedCompanyInfo}
        />
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   console.log("mapping state", state);
//   return {
//     allCompanies: state.company.companies,
//     selectedCompanyInfo: state.company.selectedCompanyInfo,
//     loading: state.company.fetchingCompanies,
//     error: state.company.error
//   };
// };
// export default connect(mapStateToProps)(withStyles(styles)(StudentWelcome));
//
StudentWelcome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(StudentWelcome);
// export default StudentWelcome;
