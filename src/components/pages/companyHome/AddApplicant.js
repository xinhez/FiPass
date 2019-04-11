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
import { addApplicant } from "../../../actions/application";
import "../../common/Component.css";
import "./AddApplicant.css";

class AddApplicant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
    this._handleValueChange = this._handleValueChange.bind(this);
  }

  _handleValueChange(value) {
    this.setState({ ...value });
  }

  render() {
    const { code } = this.state;
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
            Enter Candidate’s Code
          </Typography>
          <TextField
            className="Dialog-textField"
            variant="outlined"
            margin="normal"
            required
            id="code"
            value={code}
            onChange={e => this._handleValueChange({ code: e.target.value })}
            label="Code"
            fullWidth
          />
          <Button
            className="Button-primary Dialog-bottom-button"
            variant="contained"
            onClick={_ => this.props.onClickAddApplicant(code)}
            color="primary"
          >
            Add
          </Button>
        </div>
      </Dialog>
    );
  }
}

AddApplicant.propTypes = {
  closeForm: PropTypes.func.isRequired,
  onClickAddApplicant: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default AddApplicant;
