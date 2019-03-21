import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
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
    maxWidth: "80%",
    maxHeight: "80%"
  },
  locationText: {
    "padding-top": "5px"
  }
});

function CompanyCard(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.imgSrc} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                </Typography>

                <Grid item xs container>
                  <ButtonBase className={classes.locationImage}>
                    <img
                      className={classes.location}
                      alt="complex"
                      src={props.locationImg}
                    />
                  </ButtonBase>
                  <Typography gutterBottom className={classes.locationText}>
                    {props.location}
                  </Typography>
                </Grid>

                <Typography color="textSecondary">{props.jd}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.heartImage}>
                <img
                  className={classes.heart}
                  alt="complex"
                  src={props.heartSrc}
                />
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

CompanyCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyCard);
