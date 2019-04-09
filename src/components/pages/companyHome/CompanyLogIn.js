import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { loginCompanyUser } from "../../../actions/user";
import "./CompanyLogIn.css";

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
      <div className="companyLogIn">
        {this.renderError()}
        {this.renderLoading()}
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={e => this.handleEmailChange(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => this.handlePasswordChange(e.target.value)}
          fullWidth
          required
        />
        <Button onClick={this.handleClickLogIn} color="primary">
          Continue
        </Button>
      </div>
    );
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return <div>Incorrect User Information</div>;
    } else {
      return <div>Log in</div>;
    }
  }
  renderLoading() {
    const { loggingIn } = this.props;
    if (loggingIn) {
      return <div className="companyLogIn"> loading... </div>;
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
