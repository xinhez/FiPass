import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  FormControl,
  InputBase,
  DialogActions
} from "@material-ui/core";

const style = theme => ({
  popup: {
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: 15
  },
  inputBaseRoot: {
    marginTop: theme.spacing.unit * 3,
    width: theme.spacing.unit * 55
  },
  inputBaseInput: {
    border: "2px solid #51A8DD",
    borderRadius: 5,
    paddingLeft: 10,
    boxSizing: "border-box",
    height: theme.spacing.unit * 6
  },
  enterCodeTitle: {
    marginTop: theme.spacing.unit * 10,
    color: "#51A8DD",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold"
  },
  // action: {
  //     marginBotton: theme.spacing.unit * 10,
  // }
  addButton: {
    marginBottom: theme.spacing.unit * 6,
    background: "#51A8DD",
    borderRadius: 5,
    width: theme.spacing.unit * 15,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 500
  }
});

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          value="1"
          onClick={this.handleOpen}
        >
          Add Studnet Code
        </Button>

        <Dialog
          open={this.state.open}
          classes={{
            paper: classes.popup
          }}
        >
          <DialogContent>
            <Typography className={classes.enterCodeTitle}>
              Enter Candidate's Code
            </Typography>
            <FormControl>
              <InputBase
                classes={{
                  root: classes.inputBaseRoot,
                  input: classes.inputBaseInput
                }}
              />
            </FormControl>
          </DialogContent>
          <DialogActions className={classes.action}>
            <Button className={classes.addButton}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(style)(AddStudent);
