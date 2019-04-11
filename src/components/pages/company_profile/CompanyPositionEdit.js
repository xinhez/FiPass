import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  FormControl,
  InputBase,
  DialogActions,
  IconButton,
  Grid
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

function EditTextField(props) {
  return (
    <Grid
      item
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={40}
    >
      <Grid item>
        <Typography className={props.classes.namegrid}>{props.name}</Typography>
      </Grid>
      <Grid item>
        <InputBase
          // disableOutlined={!props.canEdit}
          // disabled={!props.canEdit}
          id={props.id}
          variant="filled"
          multiline={true}
          fullWidth={true}
          // className={props.classes.textgrid}
          classes={{
            root: props.classes.textgrid,
            input: props.classes.bootstrapInput
          }}
          value={props.value}
          onChange={props.onChange}
        />
      </Grid>
    </Grid>
  );
}

const styles = theme => ({
  popup: {
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: 15
  },
  enterCodeTitle: {
    marginTop: theme.spacing.unit * 10,
    color: "#51A8DD",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold"
  },
  inputBaseRoot: {
    marginTop: theme.spacing.unit * 3,
    width: theme.spacing.unit * 55
  },
  inputBaseInput: {
    border: "2px solid #51A8DD",
    borderRadius: 5,
    paddingLeft: 10,
    boxSizing: "border-box",
    height: theme.spacing.unit * 6
  },
  addButton: {
    marginBottom: theme.spacing.unit * 3,
    background: "#51A8DD",
    borderRadius: 5,
    width: theme.spacing.unit * 15,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 500,
    textTransform: "none"
  },
  positionTitleForm: {},
  positionTitleRoot: {
    // lignItems: "center",
    // display: "flex",
    // justifyContent: "center",
    marginLeft: theme.spacing.unit * 23,
    width: "20%"
  },
  editButton: {
    marginTop: theme.spacing.unit * -6,
    marginLeft: theme.spacing.unit * 32,
    lignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  bootstrapInput: {
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    padding: 10
  },
  namegrid: {
    fontSize: 16,
    color: "#000000",
    marginLeft: theme.spacing.unit * 5,
    width: theme.spacing.unit
  },
  textgrid: {
    border: 0,
    marginLeft: theme.spacing.unit
  },
  dialogContent: {
    width: "100%"
  }
});

class PositionEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEditTitle: false,
      title: "abc"
    };

    this._handleEditTitle = this._handleEditTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  _handleEditTitle(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
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
        >
          <DialogContent className={classes.dialogContent}>
            <Grid
              container
              alignItems="stretch"
              direction="column"
              justify="center"
            >
              <EditTextField
                classes={classes}
                name={"Job Type"}
                value={this.state.name}
                onChange={this.handleChange}
                id="title"
              />
              <EditTextField
                classes={classes}
                name={"Location"}
                value={this.state.name}
                onChange={this.handleChange}
                id="title"
              />
              <EditTextField
                classes={classes}
                name={"Skill"}
                value={this.state.name}
                onChange={this.handleChange}
                id="title"
              />
              <EditTextField
                classes={classes}
                name={"Decription"}
                value={this.state.name}
                onChange={this.handleChange}
                id="title"
              />
            </Grid>
          </DialogContent>
          <DialogActions className={classes.action}>
            <Button className={classes.addButton} onClick={this.handlelsAdd}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PositionEdit);
