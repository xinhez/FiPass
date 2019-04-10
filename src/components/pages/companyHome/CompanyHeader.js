import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonBase } from "@material-ui/core";
import { Settings, PersonAdd } from "@material-ui/icons";
import { USER_ROLE_COMPANY } from "../../../actions/user";
import "../../common/Component.css";
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

    return (
      <div className="companyHeader">
        <ButtonBase disableRipple className="Button-base">
          <PersonAdd className="companyHeader-add Profile-icon" />
        </ButtonBase>
        <ButtonBase disableRipple className="Button-base">
          <Settings className="Profile-icon" />
        </ButtonBase>
      </div>
    );
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
