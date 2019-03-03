import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class FormDialog extends Component {
  constructor() {
    super();
    this.state = {
      openStep: 0,
      UserName: "",
      PassWord: "",
      ComfirmedPassWord: ""
    };

    this.handleStep = this.handleStep.bind(this);
  }

  handleStep(v, event) {
    if (this.state.openStep + v > 3) {
      this.state.openStep = 0;
    } else if (this.state.openStep + v < 0) {
      this.state.openStep = 0;
    } else {
      this.state.openStep += v;
    }
    // console.log(this.state.openStep)
    this.setState({
      openStep: this.state.openStep
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>
        <div>{this.state.openSecondStep ? this.state.UserName : null}</div>
        <Button
          variant="outlined"
          color="primary"
          value="1"
          onClick={this.handleStep.bind(this, 1)}
        >
          Open form dialog
        </Button>
        <Dialog
          open={this.state.openStep === 1}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign up 1/3</DialogTitle>
          <DialogContent>
            <DialogContentText>First Sign up step</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="UserName"
              label="UserName"
              type="text"
              fullWidth
              onChange={this.handleChange.bind(this)}
              value={this.state.UserName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="PassWord"
              label="PassWord"
              type="password"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="ComfirmedPassWord"
              label="Confirm PassWord"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleStep.bind(this, -1)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleStep.bind(this, 1)}
              color="primary"
              size="medium"
            >
              Next Step
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 2}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign up 2/3</DialogTitle>
          <DialogContent>
            <DialogContentText>Second Sign up step</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="ComfirmedPassWord"
              label="Confirm PassWord"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleStep.bind(this, -1)} color="primary">
              previous
            </Button>
            <Button onClick={this.handleStep.bind(this, 1)} color="primary">
              Next Step
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 3}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign up 3/3</DialogTitle>
          <DialogContent>
            <DialogContentText>Last Sign up step!</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="ComfirmedPassWord"
              label="Confirm PassWord"
              type="password"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="ComfirmedPassWord"
              label="Confirm PassWord"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleStep.bind(this, -1)} color="primary">
              Prev
            </Button>
            <Button onClick={this.handleStep.bind(this, 1)} color="primary">
              Finish
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
