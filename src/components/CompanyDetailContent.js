import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import FloatingActionButtonZoom from "./FloatingActionButtonZoom.js";
const styles = theme => ({
  root: {
    display: "inline-block",
    float: "right",
    width: "70%",
    height: "100%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto"
    // maxWidth: 10,
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  heart: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  heartImage: {
    width: 30,
    height: 30
  },
  locationImage: {
    width: 30,
    height: 30
  },
  location: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "80%"
  }
});

function CompanyDetailContent(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.imgSrc} />
            </ButtonBase>
          </Grid>

          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {props.name}
              </Typography>

              <Grid item xs container>
                <Grid item xs>
                  <ButtonBase className={classes.locationImage}>
                    <img
                      className={classes.location}
                      alt="complex"
                      src={props.locationImg}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs>
                  <Typography gutterBottom>{props.location}</Typography>
                </Grid>
                <Grid item xs>
                  <ButtonBase className={classes.locationImage}>
                    <img
                      className={classes.location}
                      alt="complex"
                      src={props.locationImg}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs>
                  <Typography gutterBottom>{props.location}</Typography>
                </Grid>
              </Grid>

              <FloatingActionButtonZoom />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

CompanyDetailContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyDetailContent);
