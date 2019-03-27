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
    // float: "right",
    width: "68%",
    height: "100%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    height: "100%"

    // maxWidth: 10,
  },
  nopadding: {
    padding: 0,
    margin: 0
  },
  image: {
    width: "100%",
    height: "12%"
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%"
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
  linkImage: {
    width: 30,
    height: 30
  },
  linkImg: {
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "80%"
  },
  title: {
    padding: "0 5%",
    "font-weight": "bold",
    "font-size": "xx-large"
  },
  padding5: {
    padding: "0 5% 2%"
  },
  locationText: {
    "padding-top": "5px"
  }
});

function CompanyDetailContent(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <Paper className={`${classes.paper} ${classes.nopadding}`}>
        <Grid item>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.imgSrc} />
            </ButtonBase>
          </Grid>

          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.title}
              >
                {props.name}
              </Typography>

              <Grid item xs container className={classes.padding5}>
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

                <Grid item xs container className={classes.padding5}>
                  <ButtonBase className={classes.linkImage}>
                    <img
                      className={classes.linkImg}
                      alt="complex"
                      src={props.linkImg}
                    />
                  </ButtonBase>
                  <a className={classes.locationText} href={props.linkUrl}>
                    {props.linkUrl}
                  </a>
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
