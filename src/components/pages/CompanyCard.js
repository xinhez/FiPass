import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
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
  locationNameFont: {
    "padding-top": "5px",
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": 500,
    "font-size": "16px",
    "line-height": "normal",
    color: "#858585"
  },
  companyNameFont: {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "bold",
    "font-size": "18px",
    "line-height": "normal",
    color: "#000000"
  },
  companyShortDescriptionFont: {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "20px",
    color: "#2e2e2e"
  }
});

function CompanyCard(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div key={props.id} className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <Link to={`/testCompanyCard`} className={classes.image}>
              <img className={classes.img} alt="complex" src={props.imgSrc} />
            </Link>
          </Grid>

          <Grid item xs={9} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.companyNameFont}
                >
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
                  <Typography gutterBottom className={classes.locationNameFont}>
                    {props.location}
                  </Typography>
                </Grid>

                <Grid item xs container>
                  <Typography
                    color="textSecondary"
                    className={classes.companyShortDescriptionFont}
                  >
                    {props.jd}
                  </Typography>
                  <Link to={`/more`}>and more</Link>
                </Grid>
              </Grid>
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
