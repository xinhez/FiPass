import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Dialog, TextField, Typography } from "@material-ui/core";
import { loginStudentUser } from "../../../actions/user";
import "../../common/Component.css";
import "./StudentLogIn.css";

class StudentLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClickLogIn = this.handleClickLogIn.bind(this);
  }

  handleClickLogIn() {
    const { email, password } = this.state;
    this.props.dispatch(
      loginStudentUser({
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
    const { open } = this.props;

    return (
      <Dialog className="studentLogIn" open={open}>
        <Typography className="Dialog-title" variant="title">
          Welcome
        </Typography>
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          id="email"
          value={email}
          onChange={e => this.handleEmailChange(e.target.value)}
          label="Email"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={password}
          onChange={e => this.handlePasswordChange(e.target.value)}
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <Button onClick={_ => this.props.closeForm()} color="primary">
          Cancel
        </Button>
        <Button
          className="Button-primary"
          variant="contained"
          onClick={_ => this.props.onClickLogIn({ email, password })}
          color="primary"
        >
          Continue
        </Button>
      </Dialog>
    );
  }
}

StudentLogIn.propTypes = {
  closeForm: PropTypes.func.isRequired,
  onClickLogIn: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default StudentLogIn;
