import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
const styles = theme => ({
  root: {},
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  },
  location: {
    float: "right",
    width: "fit-content"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  loginButton: {
    position: "relative",
    right: "-40px",
    width: "40%",
    // margin: theme.spacing.unit,
    background: "#FFFFFF",
    /* #51A8DD */
    border: "1px solid #51A8DD",
    "box-sizing": "border-box",
    "border-radius": "5px",
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": 500,
    "font-size": "20px",
    "line-height": "normal",
    color: "#51A8DD"
  },
  signupButton: {
    position: "relative",
    right: "-50px",
    width: "40%",

    // margin: theme.spacing.unit,
    background: "#51A8DD",
    /* #51A8DD */
    "border-radius": "5px",
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": 500,
    "font-size": "20px",
    "line-height": "normal",
    color: "#FFFFFF"
  }
});

class LoginFormStu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.loginButton}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.signupButton}
          href="/signup"
        >
          Sign up
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(LoginFormStu);
