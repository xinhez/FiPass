import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonBase } from "@material-ui/core";
import { Settings, PersonAdd } from "@material-ui/icons";
import AddApplicant from "./AddApplicant";
import { addApplicant } from "../../../actions/application";
import { USER_ROLE_COMPANY } from "../../../actions/user";
import "../../common/Component.css";
import "./CompanyHeader.css";
class StudentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddApplicantForm: false
    };
    this._handleClickAddApplicantForm = this._handleClickAddApplicantForm.bind(
      this
    );
    this.onClickAddApplicant = this.onClickAddApplicant.bind(this);
  }

  _handleClickAddApplicantForm(open: boolean) {
    this.setState({ showAddApplicantForm: open });
  }

  onClickAddApplicant(code) {
    const { id, token } = this.props;
    this.props.dispatch(addApplicant(token, id, parseInt(code)));
    this._handleClickAddApplicantForm(false);
  }

  render() {
    const { showAddApplicantForm } = this.state;
    const { id, token, role } = this.props;
    if (id === null || token === null || role !== USER_ROLE_COMPANY) {
      return null;
    }

    return (
      <div className="companyHeader">
        <ButtonBase disableRipple className="Button-base">
          <PersonAdd
            className="companyHeader-add Profile-icon"
            onClick={_ => this._handleClickAddApplicantForm(true)}
          />
        </ButtonBase>
        <ButtonBase disableRipple className="Button-base">
          <Settings className="Profile-icon" />
        </ButtonBase>
        <AddApplicant
          onClickAddApplicant={this.onClickAddApplicant}
          open={showAddApplicantForm}
          closeForm={_ => this._handleClickAddApplicantForm(false)}
        />
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
