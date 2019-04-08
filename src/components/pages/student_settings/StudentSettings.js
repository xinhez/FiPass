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
  CardContent,
  Input,
  InputLabel,
  InputBase,
  Chip,
  CardMedia
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import CameraIcon from "@material-ui/icons/CameraAlt";
import Divider from "@material-ui/core/Divider";
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
        <InputBase
          // color='#FFFFFF'
          disableOutlined={!props.canEdit}
          disabled={!props.canEdit}
          id={props.id}
          variant="filled"
          // className={props.classes.textgrid}
          classes={
            props.canEdit
              ? {
                  root: props.classes.textgrid,
                  input: props.classes.bootstrapInput
                }
              : {
                  root: props.classes.textgrid,
                  input: props.classes.bootstrapNotInput
                }
          }
          value={props.value}
          onChange={props.onChange}
        />
      </Grid>
    </Grid>
  );
}

const skills = [
  "JavaScript",
  "C++",
  "Java",
  "React",
  "PhotoShop",
  "LeaderShip",
  "Deep Learning",
  "AutoCAD"
];

const styles = theme => ({
  rootPaper: {
    backgroundColor: "#E5E5E5"
  },
  bootstrapInput: {
    // border: '1px solid #ced4da',
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    paddingLeft: 10
  },
  bootstrapNotInput: {
    paddingLeft: 10
  },
  namegrid: {
    fontSize: 16,
    color: "#000000",
    marginLeft: theme.spacing.unit * 5,
    width: theme.spacing.unit * 10
  },
  textgrid: {
    border: 0,
    width: theme.spacing.unit * 70,
    marginLeft: theme.spacing.unit
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
    marginLeft: theme.spacing.unit * 48,
    top: theme.spacing.unit * 9
  },
  uploadInput: {
    display: "none"
  },
  divider: {
    position: "absolute",
    top: theme.spacing.unit * 20,
    border: "1px solid #DCDCDC"
  },
  skillsEditButton: {
    color: "#51A8BD",
    float: "right",
    marginRight: theme.spacing.unit * 3
  },

  skillsFont: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#BDBDBD",
    // float: 'left',
    marginLeft: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit
    // marginLeft: theme.spacing.unit * 5
  },

  userName: {
    // position: "relative",
    width: theme.spacing.unit * 20,
    // height: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 40,
    marginTop: theme.spacing.unit * 1,
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
    marginLeft: theme.spacing.unit * 3
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
    marginLeft: theme.spacing.unit * 30
  },
  cancelFont: {
    fontSize: 20,
    textAlign: "center",
    color: "#51A8DD"
  },
  profileFont: {
    // position: "absolute",
    // marginLeft: theme.spacing.unit * 5,
    fontSize: 30,
    // textAlign: "center",
    color: "#6E6E6E",
    float: "left",
    padding: theme.spacing.unit * 4
  },
  infoEditButton: {
    float: "right",
    // marginRight: theme.spacing.unit * 3,
    color: "#51A8BD",
    padding: theme.spacing.unit * 4
  },
  cardContent: {
    height: theme.spacing.unit * 20
  },
  editTextFieldDivider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  skillsChip: {
    // padding: theme.spacing.unit * 4
    margin: theme.spacing.unit / 2,
    borderRadius: 5,
    border: "1px solid #DCDCDC;",
    backgroundColor: "#FFFFFF"
  },
  skillsChipPaper: {
    display: "flex",
    // justifyContent: 'center',
    flexWrap: "wrap",
    // width: theme.spacing.unit * 100,
    marginTop: theme.spacing.unit * 2,
    // float: 'left'
    marginLeft: theme.spacing.unit * 4
    // padding: theme.spacing.unit / 2,
  }
});

class StudentSettings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Yining Yang",
      email: "xxx@gmail.com",
      password: "xxxxxx",
      school: "CMU",
      degree: "Master",
      grad_year: 2019,
      major: "CS",
      skills: [
        { key: 0, label: "JavaScript" },
        { key: 1, label: "C++" },
        { key: 2, label: "Android" },
        { key: 3, label: "iOS" },
        { key: 4, label: "Java" },
        { key: 5, label: "React" },
        { key: 6, label: "LeaderShip" },
        { key: 7, label: "Mache Leanring" },
        { key: 8, label: "Deep Learning" },
        { key: 9, label: "AutoCAD" },
        { key: 10, label: "AutoCAD" },
        { key: 11, label: "CAD" },
        { key: 12, label: "ADC" }
      ],

      disableEditing: true,
      expandedSkillsEdition: false,
      expandedInfoEdition: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSkillDelete = this.handleSkillDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleExpandClick(name, event) {
    console.log(`name ${name}`);
    console.log(`state ${this.state[name]}`);
    this.setState({
      [name]: !this.state[name]
    });
  }

  handleSkillDelete(data, event) {
    // console.log(data)
    this.setState({
      skills: this.state.skills.filter(d => {
        return d.key != data.key;
      })
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
                    aria-label="Show Edit Buttons"
                  >
                    <CreateIcon />
                  </IconButton>
                  <Typography className={classes.skillsFont}>SKILLS</Typography>
                  <Paper
                    justifyContent="center"
                    elevation={0}
                    className={classes.skillsChipPaper}
                  >
                    {this.state.skills.map((data, idx) => {
                      return (
                        <Chip
                          key={data.key}
                          label={data.label}
                          onDelete={
                            this.state.expandedSkillsEdition
                              ? this.handleSkillDelete.bind(this, data)
                              : null
                          }
                          classes={{
                            root: classes.skillsChip
                            // label: classes.skillsChipLabel,
                          }}
                        />
                      );
                    })}
                  </Paper>
                </CardContent>
                <Collapse in={this.state.expandedSkillsEdition} timeout="auto">
                  <CardContent>
                    {/* <CardActions disableActionSpacing> */}
                    <Button
                      classes={{
                        root: classes.skillsCancelButton
                      }}
                      onClick={this.handleExpandClick.bind(
                        this,
                        "expandedSkillsEdition"
                      )}
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
                      onClick={this.handleExpandClick.bind(
                        this,
                        "expandedSkillsEdition"
                      )}
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
                {/* <Grid container spacing={8} alignItems="space-between"> */}
                {/* <Grid item> */}
                <Typography className={classes.profileFont}>Profile</Typography>
                {/* </Grid> */}
                {/* <Grid item> */}
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
                {/* </Grid> */}
                {/* </Grid> */}
              </CardContent>
              <CardContent className={classes.infoCard}>
                <Grid
                  container
                  alignItems="stretch"
                  direction="column"
                  justify="center"
                >
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"Name"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.name}
                      onChange={this.handleChange}
                      id="name"
                    />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"PassWord"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.password}
                      onChange={this.handleChange}
                      id="password"
                    />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"Email"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.email}
                      onChange={this.handleChange}
                      id="email"
                    />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"School"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.school}
                      onChange={this.handleChange}
                      id="school"
                    />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"Degree"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.degree}
                      onChange={this.handleChange}
                      id="degree"
                    />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"Grad Year"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.grad_year}
                      onChange={this.handleChange}
                      id="grad_year"
                    />
                    <Divider middle className={classes.editTextFieldDivider} />
                  </Grid>
                  <Grid item>
                    <EditTextField
                      classes={classes}
                      name={"Major 1"}
                      canEdit={this.state.expandedInfoEdition}
                      value={this.state.major}
                      onChange={this.handleChange}
                      id="major"
                    />
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
                  <Button
                    classes={{
                      root: classes.skillsCancelButton
                    }}
                    onClick={this.handleExpandClick.bind(
                      this,
                      "expandedInfoEdition"
                    )}
                  >
                    <Typography className={classes.cancelFont}>
                      Cancel
                    </Typography>
                  </Button>

                  <Button
                    classes={{
                      root: classes.skillsSaveButton
                    }}
                    onClick={this.handleExpandClick.bind(
                      this,
                      "expandedInfoEdition"
                    )}
                  >
                    <Typography className={classes.saveFont}>Save</Typography>
                  </Button>
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
