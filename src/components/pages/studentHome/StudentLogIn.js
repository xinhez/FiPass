import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonBase,
  Dialog,
  TextField,
  Typography
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "../../common/Component.css";
import "./StudentLogIn.css";

class StudentLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this._handleValueChange = this._handleValueChange.bind(this);
  }

  _handleValueChange(value) {
    this.setState({ ...value });
  }

  render() {
    const { email, password } = this.state;
    const { open } = this.props;

    return (
      <Dialog fullWidth maxWidth="sm" open={open}>
        <div className="studentLogIn-top">
          <ButtonBase className="studentLogIn-close">
            <Close
              className="Button-icon"
              onClick={_ => this.props.closeForm()}
            />
          </ButtonBase>
        </div>
        <div className="studentLogIn Card-centered">
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
            onChange={e => this._handleValueChange({ email: e.target.value })}
            label="Email"
            fullWidth
          />
          <TextField
            className="Dialog-textField"
            variant="outlined"
            margin="normal"
            required
            value={password}
            onChange={e =>
              this._handleValueChange({ password: e.target.value })
            }
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
          <Button
            className="Button-primary Dialog-bottom-button"
            variant="contained"
            onClick={_ => this.props.onClickLogIn({ email, password })}
            color="primary"
          >
            Continue
          </Button>
        </div>
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
