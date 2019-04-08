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
  CardMedia,
  CardHeader
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import CameraIcon from "@material-ui/icons/CameraAlt";
import Divider from "@material-ui/core/Divider";
import CreateIcon from "@material-ui/icons/Create";
import LocationIcon from "@material-ui/icons/LocationOn";

import PositionCard from "./position_card";

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
    height: theme.spacing.unit * 10
  },
  skillsCard: {
    marginTop: theme.spacing.unit * 5,
    backgroundColor: "#FFFFFF",
    border: "2px solid #DCDCDC",
    borderRadius: 5
  },
  infoPaper: {
    // width: theme.spacing.unit * 100,
    // height: theme.spacing.unit * 100,
    // marginTop: theme.spacing.unit * 10,
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
    width: theme.spacing.unit * 10,
    height: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 47,
    backgroundColor: "#C4C4C4"
  },
  companyCardMedia: {
    height: theme.spacing.unit
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
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10
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
  positionTitleFont: {
    fontSize: 24,
    color: "#858585",
    fontWeight: "bold",
    // alignItems: 'flex-end',
    float: "left",
    // marginLeft: theme.spacing.unit * 50,

    marginBottom: -theme.spacing.unit * 10,
    marginTop: theme.spacing.unit * 2
  },
  positionTitleGrid: {
    width: theme.spacing.unit * 107
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
  },
  locationIcon: {
    display: "block",
    color: "#B3B3B3",
    marginRight: 5
  },
  locationLi: {
    marginLeft: theme.spacing.unit * 37,
    display: "inline-flex",
    verticalAlign: "middle",
    alignItems: "center"
  },
  locationName: {
    fontSize: 16,
    color: "#858585",
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: "normal"
  },
  positionGrid: {
    // marginLeft: theme.spacing.unit * 16,
    width: theme.spacing.unit * 120,
    marginTop: theme.spacing.unit * 5
  },
  positionInnerGrid: {
    margin: -16
  }
});

class CompanyProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Google",
      location: "SF, Mountain View, CA",
      description:
        "Google LLC[5] is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple and Facebook.[6][7] Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet 's leading subsidiary and will continue to be the umbrella company for Alphabet 's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.",
      position: [
        {
          key: 0,
          value: {
            role: "SDE1",
            kind: "ft",
            location: "Pitts",
            skills: ["Java", "C++"],
            JD: "Love Working"
          }
        },
        {
          key: 1,
          value: {
            role: "SDE2",
            kind: "ft",
            location: "Pitts",
            skills: ["Java", "C++"],
            JD: "Love Working"
          }
        },
        {
          key: 2,
          value: {
            role: "SDE3",
            kind: "ft",
            location: "Pitts",
            skills: ["Java", "C++"],
            JD: "Love Working"
          }
        },
        {
          key: 3,
          value: {
            role: "SDE4",
            kind: "ft",
            location: "Pitts",
            skills: ["Java", "C++"],
            JD: "Love Working"
          }
        },
        {
          key: 4,
          value: {
            role: "SDE4",
            kind: "ft",
            location: "Pitts",
            skills: ["Java", "C++"],
            JD: "Love Working"
          }
        }
      ],

      disableEditing: true,
      expandedSkillsEdition: false,
      expandedInfoEdition: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSkillDelete = this.handleSkillDelete.bind(this);
  }

  createPorision(classes) {
    let grid = [];
    for (let pidx = 0; pidx < this.state.position.length; pidx += 3) {
      let children = [];
      let cidx = pidx;
      for (; cidx < pidx + 3 && cidx < this.state.position.length; cidx += 1) {
        // console.log(this.state.position[cidx].value.role)
        children.push(
          <Grid item md={3}>
            <PositionCard
              title={this.state.position[cidx].value.role}
              role={this.state.position[cidx].value.role}
              location={this.state.position[cidx].value.location}
              skills={this.state.position[cidx].value.skills}
              Job={this.state.position[cidx].value.JD}
            />
          </Grid>
        );
      }
      for (; cidx < pidx + 3; cidx += 1) {
        children.push(<Grid item md={3} />);
      }

      grid.push(
        <Grid item className={classes.positionGrid}>
          {" "}
          <Grid
            container
            spacing={16}
            justify="space-evenly"
            alignItems="center"
            className={classes.positionInnerGrid}
          >
            {children}
          </Grid>
        </Grid>
      );
    }
    return grid;
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
              <Card id="Company Profile" className={classes.skillsCard}>
                <CardMedia className={classes.companyCardMedia}>
                  <Avatar className={classes.photoAvater} />
                </CardMedia>
                <CardContent className={classes.skillsPaper}>
                  <Typography className={classes.userName}>
                    {this.state.name}
                  </Typography>
                  <li className={classes.locationLi}>
                    <LocationIcon className={classes.locationIcon} />
                    <Typography className={classes.locationName}>
                      {this.state.location}
                    </Typography>
                  </li>
                </CardContent>
              </Card>
            </Grid>
            <Grid item className={classes.positionTitleGrid}>
              <Typography className={classes.positionTitleFont}>
                Position(s)
              </Typography>
            </Grid>
            {this.createPorision(classes)}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CompanyProfile);
