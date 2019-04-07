import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Dialog, TextField } from "@material-ui/core";
import { loginUser } from "../../../actions/user";
import { USER_ROLE_COMPANY } from "../../../reducers/user";
import "./StudentHeader.css";
class StudentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showLoginDialog: false
    };
    this.handleClickLogIn = this.handleClickLogIn.bind(this);
    this.handleClickLogInForm = this.handleClickLogInForm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleClickLogInForm(open: boolean) {
    this.setState({ showLoginDialog: open });
  }

  handleClickLogIn() {
    const { email, password } = this.state;
    console.log("log in!", email, password);
    this.props.dispatch(
      loginUser({
        email,
        password
      })
    );
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

  render() {
    const { token, role } = this.props;
    if (role === USER_ROLE_COMPANY) {
      return null;
    }

    return (
      <div className="studentHeader">
        <Button
          variant="outlined"
          className="studentHeader-button-login"
          onClick={_ => this.handleClickLogInForm(true)}
        >
          Log in
        </Button>
        <Button variant="contained" className="studentHeader-button-signup">
          Sign up
        </Button>
        <Dialog
          className="studentHeader-login"
          open={this.state.showLoginDialog}
        >
          <TextField
            className="studentHeader-login-text-field"
            required
            id="email"
            value={this.state.email}
            onChange={e => this.handleEmailChange(e.target.value)}
            label="Email"
            fullWidth
          />
          <TextField
            className="studentHeader-login-text-field"
            required
            value={this.state.password}
            onChange={e => this.handlePasswordChange(e.target.value)}
            id="password"
            label="Password"
            fullWidth
          />
          <Button
            onClick={_ => this.handleClickLogInForm(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={this.handleClickLogIn} color="primary">
            Continue
          </Button>
        </Dialog>
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
