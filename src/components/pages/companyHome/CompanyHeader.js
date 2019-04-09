import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Dialog, TextField } from "@material-ui/core";
import { USER_ROLE_COMPANY, loginUser } from "../../../actions/user";
import "./CompanyHeader.css";
class StudentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, token, role } = this.props;
    if (id === null || token === null || role !== USER_ROLE_COMPANY) {
      return null;
    }

    return <div className="companyHeader">Company Header</div>;
  }
}

const mapStateToProps = state => {
  return {
    id: state.user.id,
    token: state.user.token,
    role: state.user.role,
    loggingIn: state.user.loggingInUser,
    error: state.user.error
  };
};

export default connect(mapStateToProps)(StudentHeader);
