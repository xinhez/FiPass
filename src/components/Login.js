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

    this.handleFirstClickOpen = this.handleFirstClickOpen.bind(this);
    this.handleFirstClose = this.handleFirstClose.bind(this);
    this.handleSecondClickOpen = this.handleSecondClickOpen.bind(this);
    this.handleSecondClose = this.handleSecondClose.bind(this);
    this.handleThridClickOpen = this.handleThridClickOpen.bind(this);
    this.handleThirdClose = this.handleThirdClose.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleFirstClickOpen() {
    this.setState({
      openStep: 1
    });
  }

  handleFirstClose() {
    this.setState({
      openStep: 0
    });
  }

  handleSecondClickOpen() {
    this.setState({
      openStep: 2
    });
  }

  handleSecondClose() {
    this.setState({
      openStep: 1
    });
  }

  handleThridClickOpen() {
    this.setState({
      openStep: 3
    });
  }

  handleThirdClose() {
    this.setState({
      openStep: 2
    });
  }

  handleExit() {
    this.setState({
      openStep: 0
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
          onClick={this.handleFirstClickOpen}
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
            <Button onClick={this.handleFirstClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSecondClickOpen}
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
            <Button onClick={this.handleSecondClose} color="primary">
              previous
            </Button>
            <Button onClick={this.handleThridClickOpen} color="primary">
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
            <Button onClick={this.handleThirdClose} color="primary">
              Prev
            </Button>
            <Button onClick={this.handleExit} color="primary">
              Finish
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
