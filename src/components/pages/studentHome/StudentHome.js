import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CompanyList from "./CompanyList";
import CompanyFilter from "./CompanyFilter";
import { fetchCompanies } from "../../../actions/company";
import "../../common/Home.css";

class StudentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "all",
      selectedCompany: null
    };
    this.onSelectedCompanyChange = this.onSelectedCompanyChange.bind(this);
    this.onSelectedFilterChange = this.onSelectedFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.selectedCompany === null &&
      nextProps.companies !== null &&
      nextProps.companies["all"] !== null &&
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

  render() {
    const { selectedFilter, selectedCompany } = this.state;
    const { error, loading, companies } = this.props;

    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (loading || selectedCompany === null) {
      return <div>loading...</div>;
    }

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
              <h1>{selectedFilter} Companies</h1>
              <h2>TODO: swap in selected company information</h2>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: {
      all: [
        {
          id: 1,
          user_id: 1,
          name: "test company 1",
          location: "pittsburgh",
          banner_img: null,
          description: "placeholder",
          contact_name: "testperson",
          active: true,
          created_at: "2019-04-07T04:28:17.799Z",
          updated_at: "2019-04-07T04:28:17.799Z",
          url: null
        },
        {
          id: 2,
          user_id: 2,
          name: "test company 2",
          location: "pittsburgh",
          banner_img: null,
          description: "placeholder",
          contact_name: "testperson",
          active: true,
          created_at: "2019-04-07T04:28:17.799Z",
          updated_at: "2019-04-07T04:28:17.799Z",
          url: null
        },
        {
          id: 3,
          user_id: 3,
          name: "test company 3",
          location: "pittsburgh",
          banner_img: null,
          description: "placeholder",
          contact_name: "testperson",
          active: true,
          created_at: "2019-04-07T04:28:17.799Z",
          updated_at: "2019-04-07T04:28:17.799Z",
          url: null
        }
      ],
      other: [
        {
          id: 4,
          user_id: 4,
          name: "test company 4",
          location: "pittsburgh",
          banner_img: null,
          description: "placeholder",
          contact_name: "testperson",
          active: true,
          created_at: "2019-04-07T04:28:17.799Z",
          updated_at: "2019-04-07T04:28:17.799Z",
          url: null
        }
      ]
    }, // state.company.companies || {},
    loading: state.fetchingCompanies,
    error: state.error
  };
};

export default connect(mapStateToProps)(StudentHome);
