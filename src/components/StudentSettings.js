import React, { Component } from "react";
import {
  Avatar,
  Grid,
  TextField,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.secondary.main
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: theme.spacing.unit * 3,
    width: 300
  },
  input: {
    width: 300,
    margin: theme.spacing.unit * 2
  },
  formControl: {
    width: 300,
    margin: theme.spacing.unit * 2
  },
  button: {
    marginLeft: theme.spacing.unit * 5
  }
});

class StudentSettings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Yining Yang",
      password: "xxxxxx",
      school: "CMU",
      degree: "Master",
      grad_year: 2019,
      major: "CS",
      disableEditing: true
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  enableEdit() {
    this.setState({
      disableEditing: false
    });
  }

  disableEdit() {
    this.setState({
      disableEditing: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems="center" direction="column" justify="center">
        <Grid item>
          <Avatar className={classes.avatar} />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-email-input"
            label="yiningya@andrew.cmu.edu"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item>
          <FormControl
            className={classes.formControl}
            disabled={this.state.disableEditing}
          >
            <InputLabel htmlFor="htmlfor">Name</InputLabel>
            <Input
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
            <FormHelperText>Your Name</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl} disabled>
            <InputLabel htmlFor="htmlfor">Name</InputLabel>
            <Input id="PassWord" value={this.state.name} />
            <FormHelperText>Your Name</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl} disabled>
            <InputLabel htmlFor="htmlfor">School</InputLabel>
            <Input id="School" value={this.state.school} />
            <FormHelperText>Your School</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl} disabled>
            <InputLabel htmlFor="htmlfor">Major1</InputLabel>
            <Input id="Major" value={this.state.major} />
            <FormHelperText>Your Major</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item>
          <Input value="Yining Yang" className={classes.input} disabled />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.enableEdit.bind(this)}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.disableEdit.bind(this)}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StudentSettings);
