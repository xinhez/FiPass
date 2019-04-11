import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  Typography,
  Grid,
  CardContent,
  IconButton
} from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import TravelIcon from "@material-ui/icons/CardTravel";
import EditIcon from "@material-ui/icons/Edit";
import PositionEdit from "./CompanyPositionEdit";

function RoleLocation(props) {
  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Grid item>
        <li className={props.classes.locationLi}>
          <LocationIcon className={props.classes.locationIcon} />
          <Typography className={props.classes.locationName}>
            {props.location}
          </Typography>
        </li>
      </Grid>
      <Grid>
        <li className={props.classes.locationLi}>
          <TravelIcon className={props.classes.locationIcon} />
          <Typography className={props.classes.locationName}>
            {props.role}
          </Typography>
        </li>
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  positionInfoCard: {
    width: theme.spacing.unit * 30,
    height: theme.spacing.unit * 50
  },
  title: {
    fontStyle: "nomral",
    fontWeight: "bold",
    fontSize: 18,
    color: "#51A8DD",
    // marginTop: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * -4,
    marginLeft: 27
  },
  locationIcon: {
    display: "block",
    color: "#B3B3B3",
    marginRight: 5
  },
  locationLi: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
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
  subTitle: {
    fontStyle: "nomral",
    fontWeight: "bold",
    fontSize: 18,
    color: "#858585"
  },
  subContent: {
    marginLeft: theme.spacing.unit
  },
  editButton: {
    marginTop: 0,
    marginLeft: theme.spacing.unit * 24
  }
});

/**
 *
 * @param {props.title}  : title of the position
 * @param {props.role}  : role of the position
 * @param {props.location}  : where the position is
 * @param {props.skills}    : require skill set
 * @param {props.Job}   : Job describtion
 *
 */
class PositionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPositionEdit: false
    };

    this._handleClickPositionEdit = this._handleClickPositionEdit.bind(this);
  }
  // componentWillReceiveProps(nextProps) {
  //   this._handleClickPositionEdit(false);
  // }
  _handleClickPositionEdit(open: boolean) {
    this.setState({
      openPositionEdit: open
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.positionInfoCard}>
          <IconButton className={classes.editButton}>
            <EditIcon onClick={_ => this._handleClickPositionEdit(true)} />
          </IconButton>
          <Typography className={classes.title}>{this.props.title}</Typography>
          <RoleLocation
            role={this.props.role}
            location={this.props.location}
            classes={classes}
          />
          <CardContent className={classes.subContent}>
            <Typography className={classes.subTitle}>Skills</Typography>
            {this.props.skills}
          </CardContent>
          <CardContent className={classes.subContent}>
            <Typography className={classes.subTitle}>
              Job Description
            </Typography>
            {this.props.Job}
          </CardContent>
        </Card>

        {
          <PositionEdit
            closeForm={_ => this._handleClickPositionEdit(false)}
            open={this.state.openPositionEdit}
            title={this.props.title}
            role={this.props.role}
            location={this.props.location}
            skills={this.props.skills}
            Job={this.props.Job}
          />
        }
      </div>
    );
  }
}

export default withStyles(styles)(PositionCard);
