import React, { Component } from "react";
import {
  Avatar,
  Grid,
  TextField,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  Paper,
  Typography
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import CameraIcon from "@material-ui/icons/CameraAlt";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SkillsButtons from "./SkillsButtons";

const styles = theme => ({
  skillsPaper: {
    position: "absolute",
    width: 876,
    height: 488,
    left: 282,
    top: 166,
    backgroundColor: "#FFFFFF",
    border: "1px solid #DCDCDC",
    borderRadius: 5
  },
  infoPaper: {
    position: "absolute",
    width: 876,
    height: 655,
    left: 282,
    top: 720,
    backgroundColor: "#FFFFFF",
    border: "1px solid #DCDCDC",
    borderRadius: 5
  },
  photoAvater: {
    position: "absolute",
    width: 130,
    height: 130,
    left: 360,
    top: 40,
    backgroundColor: "#C4C4C4"
  },
  cameraAvater: {
    position: "absolute",
    width: 5,
    height: 10,
    left: 392,
    top: 140
  },
  uploadInput: {
    display: "none"
  },
  divider: {
    position: "absolute",
    width: 876,
    height: 0,
    left: 0,
    top: 300,
    border: "1px solid #DCDCDC"
  },
  userName: {
    position: "absolute",
    width: 155,
    height: 25,
    left: 345,
    top: 210,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#616161"
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
      <div>
        <SkillsButtons />
        <Paper id="edit-skill-paper" className={classes.skillsPaper}>
          <Avatar className={classes.photoAvater} />
          <input
            accept="image/*"
            className={classes.uploadInput}
            id="upload-avater"
            multiple
            type="file"
          />
          <label htmlFor="upload-avater">
            <Button component="span" className={classes.cameraAvater}>
              <CameraIcon />
            </Button>
          </label>
          <Typography className={classes.userName}>Yining Yang</Typography>
          <Divider variant="fullwidth" className={classes.divider} />
        </Paper>
        <Paper id="edit-info-paper" className={classes.infoPaper}>
          <Grid
            container
            alignItems="center"
            direction="column"
            justify="center"
          >
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
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StudentSettings);
