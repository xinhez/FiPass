import React, { Component } from "react";
import {
  Avatar,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Card,
  IconButton,
  Collapse,
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

function EditTextField(props) {
  return (
    <Grid
      item
      container
      spacing={8}
      alignItems="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography className={props.classes.namegrid}>{props.name}</Typography>
      </Grid>
      <Grid item>
        <TextField
          id="input-with-icon-grid"
          defaultValue={props.defaultValue}
          variant="outlined"
          className={props.classes.textgrid}
        />
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  rootPaper: {
    backgroundColor: "#E5E5E5"
  },
  namegrid: {
    fontSize: 16,
    color: "#000000",
    marginLeft: theme.spacing.unit * 5,
    width: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 2
    // marginRight: theme.spacing.unit * ,
  },
  textgrid: {
    width: theme.spacing.unit * 70,
    marginLeft: theme.spacing.unit
    // height: theme.spacing.unit,
  },
  skillsPaper: {
    marginTop: theme.spacing.unit * 10,
    width: theme.spacing.unit * 100,
    height: theme.spacing.unit * 30
  },
  skillsCard: {
    top: theme.spacing.unit * 5,
    backgroundColor: "#FFFFFF",
    border: "2px solid #DCDCDC",
    borderRadius: 5
  },
  infoPaper: {
    // width: theme.spacing.unit * 100,
    // height: theme.spacing.unit * 100,
    marginTop: theme.spacing.unit * 10,
    backgroundColor: "#FFFFFF",
    border: "1px solid #DCDCDC",
    borderRadius: 5,
    marginBottom: theme.spacing.unit * 10
  },
  infoCard: {
    width: theme.spacing.unit * 100
    // height: theme.spacing.unit * 90,
    // marginBottom: theme.spacing.unit * 10
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
    top: theme.spacing.unit * 20,
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
    marginLeft: theme.spacing.unit * 5
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
  profileFont: {
    // position: "absolute",
    marginLeft: theme.spacing.unit * 5,
    fontSize: 30,
    // textAlign: "center",
    color: "#6E6E6E"
  },
  infoEditButton: {
    marginLeft: theme.spacing.unit * 58,
    color: "#51A8BD"
  },
  cardContent: {
    height: theme.spacing.unit * 20
  },
  editTextFieldDivider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
    // width: theme.spacing.unit * 20,
    // alignItems: "center"
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
        <Paper className={classes.rootPaper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={24}
          >
            <Grid item>
              <Card id="edit-skill-paper" className={classes.skillsCard}>
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
            <Card id="edit-info-paper" className={classes.infoPaper}>
              <CardContent>
                <Grid container spacing={8} alignItems="space-between">
                  <Grid item>
                    <Typography className={classes.profileFont}>
                      Profile
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton
                      className={classes.infoEditButton}
                      onClick={this.handleExpandClick.bind(
                        this,
                        "expandedInfoEdition"
                      )}
                      // aria-expanded={this.state.expandedSkillsEdition}
                      aria-label="Show Edit Buttons"
                    >
                      <CreateIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent className={classes.infoCard}>
                <Grid
                  container
                  alignItems="stretch"
                  direction="column"
                  justify="center"
                >
                  <Grid item>
                    <EditTextField classes={classes} name={"Name"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"PassWord"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"Email"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"School"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"Degree"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"Grad Year"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"Major 1"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField classes={classes} name={"Major 2"} />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                </Grid>
              </CardContent>
              <Collapse in={this.state.expandedInfoEdition} timeout="auto">
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
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StudentSettings);
