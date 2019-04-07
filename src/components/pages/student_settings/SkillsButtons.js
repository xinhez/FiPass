import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  TextField,
  Paper,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({});

class SkillsButtons extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card>
          <CardHeader>sdfds</CardHeader>
          <CardContent>abc</CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SkillsButtons);
