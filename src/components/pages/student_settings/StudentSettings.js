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
  Typography,
  Card,
  CardHeader,
  IconButton,
  Collapse,
  CardActions,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  CardContent
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import CameraIcon from "@material-ui/icons/CameraAlt";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SkillsButtons from "./SkillsButtons";
import CreateIcon from "@material-ui/icons/Create";

const styles = theme => ({
  skillsPaper: {
    width: theme.spacing.unit * 100,
    height: theme.spacing.unit * 30,
    backgroundColor: "#FFFFFF",
    border: "2px solid #DCDCDC",
    borderRadius: 5,
    top: theme.spacing.unit * 5
    // marginBottom: theme.spacing.unit * 10,
  },
  infoPaper: {
    width: theme.spacing.unit * 100,
    height: theme.spacing.unit * 100,
    backgroundColor: "#FFFFFF",
    border: "1px solid #DCDCDC",
    borderRadius: 5
  },
  photoAvater: {
    position: "absolute",
    width: theme.spacing.unit * 10,
    height: theme.spacing.unit * 10,
    top: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 45,
    backgroundColor: "#C4C4C4"
  },
  cameraAvater: {
    position: "absolute",
    width: theme.spacing.unit,
    height: theme.spacing.unit,
    // marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 48,
    // marginTop: theme.spacing.unit ,
    top: theme.spacing.unit * 9
  },
  uploadInput: {
    display: "none"
  },
  divider: {
    position: "absolute",
    // width: 876,
    // height: 0,
    // left: 0,
    // top: 300,
    top: theme.spacing.unit * 10,
    border: "1px solid #DCDCDC"
  },
  skillsEditButton: {
    position: "absolute",
    color: "#51A8BD",
    top: theme.spacing.unit * 17,
    left: theme.spacing.unit * 94
  },
  skillsFont: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 20,
    // textAlign: "left",
    color: "#BDBDBD",
    // marginTop:  theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 10
  },
  userName: {
    // position: "relative",
    width: theme.spacing.unit * 20,
    // height: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 40,
    marginTop: theme.spacing.unit * 12,
    // left: 345,
    // top: 210,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#616161"
  },
  skillsSaveButton: {
    background: "#51A8DD",
    borderRadius: 5,
    width: theme.spacing.unit * 20,
    heithg: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 10
  },
  saveFont: {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF"
  },
  skillsCancelButton: {
    background: "#FFFFFF",
    border: "1px solid #51A8DD",
    borderRadius: 5,
    width: theme.spacing.unit * 20,
    heithg: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 25
  },
  cancelFont: {
    fontSize: 20,
    textAlign: "center",
    color: "#51A8DD"
  },
  cardContent: {
    height: theme.spacing.unit * 20
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
      disableEditing: true,
      expandedSkillsEdition: false,
      expandedInfoEdition: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
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

  handleExpandClick(name, event) {
    console.log(`name ${name}`);
    console.log(`state ${this.state[name]}`);
    this.setState({
      [name]: !this.state[name]
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item>
            <Card id="edit-skill-paper">
              <CardContent className={classes.skillsPaper}>
                <Avatar className={classes.photoAvater} />
                <input
                  accept="image/*"
                  className={classes.uploadInput}
                  id="upload-avater"
                  multiple
                  type="file"
                />
                <label htmlFor="upload-avater">
                  <IconButton
                    component="span"
                    size="small"
                    className={classes.cameraAvater}
                  >
                    <CameraIcon size="small" />
                  </IconButton>
                </label>
                <Typography className={classes.userName}>
                  Yining Yang
                </Typography>
                <Divider variant="fullwidth" className={classes.divider} />
                {/* <CardActions> */}
                <IconButton
                  className={classes.skillsEditButton}
                  onClick={this.handleExpandClick.bind(
                    this,
                    "expandedSkillsEdition"
                  )}
                  // aria-expanded={this.state.expandedSkillsEdition}
                  aria-label="Show Edit Buttons"
                >
                  <CreateIcon />
                </IconButton>
                {/* </CardActions> */}
                <Typography className={classes.skillsFont}>SKILLS</Typography>
                {/* </CardContent> */}
              </CardContent>
              <Collapse in={this.state.expandedSkillsEdition} timeout="auto">
                <CardContent>
                  {/* <CardActions disableActionSpacing> */}
                  <Button
                    classes={{
                      root: classes.skillsCancelButton
                    }}
                    // onClick={this.handleStep.bind(this, 1)}
                  >
                    <Typography className={classes.cancelFont}>
                      Cancel
                    </Typography>
                  </Button>

                  <Button
                    classes={{
                      root: classes.skillsSaveButton
                    }}
                    // onClick={this.handleStep.bind(this, 1)}
                  >
                    <Typography className={classes.saveFont}>Save</Typography>
                  </Button>
                  {/* </CardActions> */}
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
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
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StudentSettings);
