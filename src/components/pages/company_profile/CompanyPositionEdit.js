import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Dialog } from "@material-ui/core";

const styles = theme => ({
  popup: {
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: 15
  }
});

class PositionEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, open } = this.props;
    console.log(`try ${open}`);

    return (
      <div>
        <Dialog
          open={open}
          classes={{
            paper: classes.popup
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PositionEdit);
