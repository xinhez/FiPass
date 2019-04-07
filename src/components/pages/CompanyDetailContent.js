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
    height: 30,
    margin: "0px 12px 0 0"
  },
  location: {
    margin: "auto",
    display: "block",
    maxWidth: "80%",
    maxHeight: "80%"
  },
  linkImage: {
    width: 24,
    height: 24,
    margin: "4px 12px 0 0"
  },
  linkImg: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    "margin-top": "4px",
    margin: "4px 12px 4px"
  },
  title: {
    padding: "16px 5% 0",
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "bold",
    "font-size": "20px",
    "line-height": "normal",
    color: "#000000"
  },
  padding5: {
    padding: "0 5% 2%"
  },
  locationText: {
    "padding-top": "5px",
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": 500,
    "font-size": "16px",
    "line-height": "normal",
    color: "#858585"
  }
});

class CompanyDetailContent extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes.root}>
        <Paper className={`${classes.paper} ${classes.nopadding}`}>
          <Grid item>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={this.props.imgSrc}
                />
              </ButtonBase>
            </Grid>

            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.title}
                >
                  {this.props.name}
                </Typography>

                <Grid item xs container className={classes.padding5}>
                  <ButtonBase className={classes.locationImage}>
                    <img
                      className={classes.location}
                      alt="complex"
                      src={this.props.locationImg}
                    />
                  </ButtonBase>
                  <Typography gutterBottom className={classes.locationText}>
                    {this.props.location}
                  </Typography>

                  <Grid item xs container className={classes.padding5}>
                    <ButtonBase className={classes.linkImage}>
                      <img
                        className={classes.linkImg}
                        alt="complex"
                        src={this.props.linkImg}
                      />
                    </ButtonBase>
                    <a
                      className={classes.locationText}
                      href={this.props.linkUrl}
                    >
                      {this.props.linkUrl}
                    </a>
                  </Grid>
                </Grid>

                <FloatingActionButtonZoom
                  description={this.props.description}
                  company_id={this.props.id}
                  likePosition={this.props.likePosition}
                  positions={this.props.positions}
                  percent={this.props.percent}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

CompanyDetailContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyDetailContent);
