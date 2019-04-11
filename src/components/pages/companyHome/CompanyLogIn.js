import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";
import { loginCompanyUser, USER_ROLE_COMPANY } from "../../../actions/user";
import "./CompanyLogIn.css";
import "../../common/Component.css";

class CompanyLogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleClickLogIn = this.handleClickLogIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleClickLogIn() {
    const { email, password } = this.state;
    this.props.dispatch(
      loginCompanyUser({
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
    const { email, password } = this.state;

    return (
      <div className="companyLogIn Card-centered">
        <Typography className="Dialog-title" variant="display1">
          Welcome to FiPass
        </Typography>
        {this.renderLoading()}
        <TextField
          className="companyLogIn-textField"
          id="email"
          label="Email"
          margin="normal"
          value={email}
          variant="outlined"
          onChange={e => this.handleEmailChange(e.target.value)}
          fullWidth
          required
        />
        <TextField
          className="companyLogIn-textField"
          id="password"
          label="Password"
          margin="normal"
          type="password"
          variant="outlined"
          value={password}
          onChange={e => this.handlePasswordChange(e.target.value)}
          fullWidth
          required
        />
        {this.renderError()}
        <Button
          className="Button-primary Dialog-bottom-button"
          onClick={this.handleClickLogIn}
        >
          Log In
        </Button>
      </div>
    );
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <Typography variant="body1">Incorrect User Information</Typography>
      );
    }
  }
  renderLoading() {
    const { loggingIn } = this.props;
    if (loggingIn) {
      return <div className="companyLogIn Card-centered"> loading... </div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.user.loggingInUser,
    error: state.user.error
  };
};

export default connect(mapStateToProps)(CompanyLogIn);
