import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonBase, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import StudentLogIn from "./StudentLogIn";
import StudentSignUp from "./StudentSignUp";
import { fetchSkills } from "../../../actions/skill";
import { createStudent } from "../../../actions/student";
import {
  USER_ROLE_STUDENT,
  USER_ROLE_COMPANY,
  loginStudentUser
} from "../../../actions/user";
import "../../common/Component.css";
import "./StudentHeader.css";

class StudentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginDialog: false,
      showSignUpDialog: false
    };
    this._handleClickLogInForm = this._handleClickLogInForm.bind(this);
    this._handleClickSignUpForm = this._handleClickSignUpForm.bind(this);
    this.onClickLogIn = this.onClickLogIn.bind(this);
    this.onClickSignUp = this.onClickSignUp.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchSkills());
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.id !== null &&
      nextProps.role === USER_ROLE_STUDENT &&
      nextProps.token !== null
    ) {
      this._handleClickLogInForm(false);
      this._handleClickSignUpForm(false);
    }
  }

  _handleClickLogInForm(open: boolean) {
    this.setState({ showLoginDialog: open });
  }

  _handleClickSignUpForm(open: boolean) {
    this.setState({ showSignUpDialog: open });
  }

  onClickLogIn(userInfo) {
    this.props.dispatch(loginStudentUser(userInfo));
  }

  onClickSignUp(userInfo) {
    console.log(userInfo);
    this.props.dispatch(createStudent(userInfo));
  }

  render() {
    const { showLoginDialog, showSignUpDialog } = this.state;
    const { id, token, role, skills } = this.props;
    if (role === USER_ROLE_COMPANY) {
      return null;
    }
    if (id === null || token === null || role === null) {
      return (
        <div className="studentHeader-unLoggedIn">
          <Button
            variant="outlined"
            className="Button-secondary studentHeader-button-login"
            onClick={_ => this._handleClickLogInForm(true)}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            className="Button-primary studentHeader-button-signup"
            onClick={_ => this._handleClickSignUpForm(true)}
          >
            Sign up
          </Button>
          {
            <StudentLogIn
              closeForm={_ => this._handleClickLogInForm(false)}
              onClickLogIn={this.onClickLogIn}
              open={showLoginDialog}
            />
          }
          {
            <StudentSignUp
              closeForm={_ => this._handleClickSignUpForm(false)}
              onClickSignUp={this.onClickSignUp}
              open={showSignUpDialog}
              skills={skills}
            />
          }
        </div>
      );
    } else {
      return (
        <div className="studentHeader-loggedIn">
          <Typography
            variant="display1"
            className="Dialog-title studentHeader-code"
          >
            {id}
          </Typography>
          <ButtonBase>
            <AccountCircle className="Profile-icon" />
          </ButtonBase>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    skills: state.skill.skills,
    id: state.user.id,
    role: state.user.role,
    token: state.user.token
  };
};

export default connect(mapStateToProps)(StudentHeader);
