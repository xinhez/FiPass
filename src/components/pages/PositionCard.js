import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import heart from "../test-img/heart.png";
import heart_liked from "../test-img/heart_liked.png";
import drawdown from "../test-img/drawdown.png";
import drawup from "../test-img/drawup.png";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  root: {
    flexGrow: 1,
    margin: "2.5% 0"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: "90%"
  },
  image: {
    // width: 128,
    // height: 128
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
    color: "#A8A8A8"
  },
  PostionNameFont: {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "bold",
    "font-size": "18px",
    "line-height": "normal",
    color: "#51A8DD"
  },
  companyShortDescriptionFont: {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "20px",
    color: "#2e2e2e"
  },
  drawdownImage: {
    width: 30,
    height: 30
  },
  drawdown: {},
  alignright: {
    display: "flex",
    "justify-content": "flex-end"
  },
  matched: {
    "margin-top": "-5px",
    "margin-left": "6px",
    background: "#51A8DD",
    "border-radius": "5px",
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "16px",
    "line-height": "normal",
    color: "#F2F2F2"
  }
});

class PositionCard extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(company_id, position_id) {
    console.log("props", this.props);
    console.log("set company_id", company_id);
    console.log("set position_id", position_id);
    this.props.likePosition(company_id, position_id);
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    console.log(this.props.liked == true ? "true" : "false");
    /*
    <Link to={`/testCompanyCard`} className={classes.image}>
                <img className={classes.img} alt="complex" src={this.props.imgSrc} />
              </Link>

     */
    return (
      <div key={this.props.id} className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item xs={1}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={this.props.imgSrc}
                />
              </ButtonBase>
            </Grid>

            <Grid item xs={10} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Grid container>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      className={classes.PostionNameFont}
                    >
                      {this.props.name}
                    </Typography>
                    <Button className={classes.matched}>
                      {this.props.percent}% matched
                    </Button>
                  </Grid>

                  <Grid item xs>
                    <Typography
                      gutterBottom
                      className={classes.locationNameFont}
                    >
                      {this.props.location}
                    </Typography>
                  </Grid>

                  <Grid item xs container>
                    <Typography
                      color="textSecondary"
                      className={classes.companyShortDescriptionFont}
                    >
                      {this.props.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} className={classes.alignright}>
              <ButtonBase
                className={classes.heartImage}
                onClick={e =>
                  this.handleClick(this.props.company_id, this.props.id, e)
                }
              >
                <img
                  className={classes.heart}
                  alt="complex"
                  src={this.props.liked == true ? heart_liked : heart}
                />
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid className={classes.alignright}>
            <ButtonBase className={classes.drawdownImage}>
              <img className={classes.drawdown} alt="complex" src={drawup} />
            </ButtonBase>
          </Grid>
        </Paper>
      </div>
    );
  }
}

PositionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PositionCard);
