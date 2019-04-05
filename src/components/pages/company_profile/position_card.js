import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Card, Typography, Grid, CardContent } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import TravelIcon from "@material-ui/icons/CardTravel";

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
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 4
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
function PositionCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.positionInfoCard}>
      <Typography className={classes.title}>{props.title}</Typography>
      <RoleLocation
        role={props.role}
        location={props.location}
        classes={classes}
      />
      <CardContent className={classes.subContent}>
        <Typography className={classes.subTitle}>Skills</Typography>
        sdf;dsajf;kasdjfl;ksdjlf;kj
      </CardContent>
      <CardContent className={classes.subContent}>
        <Typography className={classes.subTitle}>Job Description</Typography>
        sdlfkjsdlfjlsdkjflksj
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(PositionCard);
