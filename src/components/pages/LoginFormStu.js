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
  button: {
    margin: theme.spacing.unit
  }
});

class LoginFormStu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container xs className={classes.location}>
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Sign up
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginFormStu);
