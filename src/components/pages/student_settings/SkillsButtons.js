import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, TextField, Paper, Grid, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    // display: 'flex',
    // alignItems: 'center',
    width: 100,
    border: 10
  },
  deleteSign: {
    // position: 'relative',
    // alignItems: 'left',
    // marginBottom: theme.spacing.unit * 2,
    // marginRight: 0,
    // display: 'flex'
  }
});

class SkillsButtons extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography>123</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid>
                <Button className={classes.deleteSign}>
                  <ClearIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SkillsButtons);
