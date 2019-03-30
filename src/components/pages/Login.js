import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import {
  FormControl,
  InputLabel,
  Select,
  withStyles,
  Paper
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

import { connect } from "react-redux";

const gradYears = [
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020
];
const degrees = ["Under Graduate", "PhD", "Master"];

const style = theme => ({
  topoCSS: {
    color: "#51A8DD",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  nextFont: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500
  },
  dialogBoxStep1: {
    position: "absolute",
    width: 544,
    height: 428,
    left: 457,
    top: 199,
    background: "#FFFFFF",
    borderRadius: 15
  },
  dialogBoxStep2: {
    position: "absolute",
    width: 543,
    height: 678,
    left: 458,
    top: 120,
    background: "#FFFFFF",
    borderRadius: 15
  },
  dialogBoxStep3: {
    position: "absolute",
    width: 543,
    height: 464,
    left: 458,
    top: 200,
    background: "#FFFFFF",
    borderRadius: 15
  },
  dialogBoxStep4: {
    position: "absolute",
    width: 543,
    height: 461,
    left: 458,
    top: 200,
    background: "#FFFFFF",
    borderRadius: 15
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit * 2,
    color: theme.palette.grey[500]
  },
  prevButton: {
    position: "absolute",
    left: theme.spacing.unit,
    top: theme.spacing.unit * 2,
    color: theme.palette.grey[500]
  },
  nextButtonStep1: {
    position: "absolute",
    width: 204,
    height: 50,
    left: 170,
    top: 340,
    background: "#51A8DD",
    borderRadius: 5
  },
  nextButtonStep2: {
    position: "absolute",
    width: 204,
    height: 50,
    left: 170,
    top: 610,
    background: "#51A8DD",
    borderRadius: 5
  },
  chipRoot: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  uploadButton: {
    variant: "outlined",
    position: "absolute",
    width: 204,
    height: 108,
    left: 173,
    top: 170
  },
  uploadInput: {
    display: "none"
  },
  dialogContentText: {
    display: "flex",
    justifyContent: "center"
  },
  uploadResumeFont: {
    color: "#51A8DD",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    position: "absolute",
    width: 150,
    height: 108,
    left: 200,
    top: 135
  }
});

function CommonInfoTextField(props) {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={props.id}
      label={props.label}
      type={props.type}
      fullWidth
      onChange={props.onChange}
      value={props.value}
      variant="outlined"
    />
  );
}

class FormDialog extends Component {
  constructor() {
    super();
    this.state = {
      openStep: 0,
      email: "xxx@gmail.com",
      PassWord: "",
      ComfirmedPassWord: "",
      FirstName: "",
      LastName: "",
      MiddleName: "",
      School: "",
      Degree: "",
      GradYear: 2000,
      Major1: "",
      Major2: "",
      Phone: "",
      SoftwreSkills: [
        { key: 0, label: "JavaScript" },
        { key: 1, label: "C++" },
        { key: 2, label: "Android" },
        { key: 3, label: "iOS" },
        { key: 4, label: "Java" }
      ],
      selectedSkills: [-1]
    };

    this.handleStep = this.handleStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleSkillSelect = this.handleSkillSelect.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleStep(v, event) {
    if (this.state.openStep + v > 4) {
      this.state.openStep = 0;
    } else if (this.state.openStep + v < 0) {
      this.state.openStep = 0;
    } else {
      this.state.openStep += v;
    }
    this.setState({
      openStep: this.state.openStep
    });
  }

  handleExit(event) {
    this.setState({
      openStep: 0
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSkillSelect(v) {
    if (this.state.selectedSkills.includes(v)) {
      this.setState({
        selectedSkills: this.state.selectedSkills.filter(idx => {
          return idx != v;
        })
      });
    } else {
      this.setState({
        selectedSkills: [...this.state.selectedSkills, v]
      });
    }
  }

  handleMenuItemClick(name, event) {
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>{this.state.openSecondStep ? this.state.UserName : null}</div>
        <Button
          variant="outlined"
          color="primary"
          value="1"
          onClick={this.handleStep.bind(this, 1)}
        >
          Open form dialog
        </Button>
        <Dialog
          open={this.state.openStep === 1}
          onClose={this.handleClose}
          classes={{
            paper: classes.dialogBoxStep1
          }}
        >
          <DialogTitle id="form-dialog-title" disableTypography={true}>
            <Typography className={classes.topoCSS}>Sign up 1/4</Typography>
          </DialogTitle>
          <DialogContent>
            <CommonInfoTextField
              id="email"
              label="Email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <CommonInfoTextField
              id="PassWord"
              label="PassWord"
              type="password"
              onChange={this.handleChange}
              value={this.state.PassWord}
            />
            <CommonInfoTextField
              id="ComfirmedPassWord"
              label="Confirm PassWord"
              type="password"
              onChange={this.handleChange}
              value={this.state.ComfirmedPassWord}
            />
          </DialogContent>
          <DialogActions>
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={this.handleExit}
            >
              <CloseIcon />
            </IconButton>
            <Button
              classes={{
                root: classes.nextButtonStep1
              }}
              onClick={this.handleStep.bind(this, 1)}
            >
              <Typography className={classes.nextFont}>Next</Typography>
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 2}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{
            paper: classes.dialogBoxStep2
          }}
        >
          <DialogTitle id="form-dialog-title" disableTypography={true}>
            <Typography className={classes.topoCSS}>Sign up 2/4</Typography>
          </DialogTitle>
          <DialogContent>
            {/* <form className={classes.formContainer} noValidate autoComplete="off"> */}
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <CommonInfoTextField
                  id="FirstName"
                  label="FirstName"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.FirstName}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonInfoTextField
                  id="LastName"
                  label="LastName"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.LastName}
                />
              </Grid>
              <Grid item xs={12}>
                <CommonInfoTextField
                  id="Phone"
                  label="Phone"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.Phone}
                />
              </Grid>
              <Grid item xs={12}>
                <CommonInfoTextField
                  id="School"
                  label="School"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.School}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  autoFocus
                  select
                  margin="dense"
                  id="outlined-select-gradYear"
                  label="GradYear"
                  fullWidth
                  onChange={this.handleMenuItemClick.bind(this, "GradYear")}
                  value={this.state.GradYear}
                  variant="outlined"
                >
                  {gradYears.map((option, index) => (
                    <MenuItem key={option.toString()} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  select
                  margin="dense"
                  id="outlined-select-degree"
                  label="Degree"
                  fullWidth
                  onChange={this.handleMenuItemClick.bind(this, "Degree")}
                  value={this.state.Degree}
                  variant="outlined"
                >
                  {degrees.map((option, index) => (
                    <MenuItem key={option.toString()} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <CommonInfoTextField
                  id="Major1"
                  label="Major1"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.Major1}
                />
              </Grid>
              <Grid item xs={12}>
                <CommonInfoTextField
                  id="Major2"
                  label="Major2"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.Major2}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <IconButton
              className={classes.prevButton}
              onClick={this.handleStep.bind(this, -1)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Button
              classes={{
                root: classes.nextButtonStep2
              }}
              onClick={this.handleStep.bind(this, 1)}
            >
              <Typography className={classes.nextFont}>Next</Typography>
            </Button>
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={this.handleExit}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 3}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{
            paper: classes.dialogBoxStep3
          }}
        >
          <DialogTitle id="form-dialog-title" disableTypography={true}>
            <Typography className={classes.topoCSS}>Sign up 3/4</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogContentText}>
              Tap to define what defines you
            </DialogContentText>
            <Grid className={classes.chipRoot}>
              {this.state.SoftwreSkills.map((data, idx) => {
                return (
                  <Chip
                    key={data.key}
                    label={data.label}
                    className={classes.chip}
                    onClick={this.handleSkillSelect.bind(this, idx)}
                    color={
                      this.state.selectedSkills.includes(idx) ? "primary" : ""
                    }
                  />
                );
              })}
            </Grid>
          </DialogContent>
          <DialogActions>
            <IconButton
              className={classes.prevButton}
              onClick={this.handleStep.bind(this, -1)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Button
              classes={{
                root: classes.nextButtonStep1
              }}
              onClick={this.handleStep.bind(this, 1)}
            >
              <Typography className={classes.nextFont}>Next</Typography>
            </Button>
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={this.handleExit}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 4}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{
            paper: classes.dialogBoxStep4
          }}
        >
          <DialogTitle id="form-dialog-title" disableTypography={true}>
            <Typography className={classes.topoCSS}>Sign up 4/4</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogContentText}>
              Upload resume to help recruiter know you better
            </DialogContentText>
            <Grid className={classes.chipRoot}>
              <Typography className={classes.uploadResumeFont}>
                Upload Resume
              </Typography>
              <input
                accept="image/*"
                className={classes.uploadInput}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.uploadButton}
                >
                  <AddIcon />
                </Button>
              </label>
            </Grid>
          </DialogContent>
          <DialogActions>
            <IconButton
              className={classes.prevButton}
              onClick={this.handleStep.bind(this, -1)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Button
              classes={{
                root: classes.nextButtonStep1
              }}
              onClick={this.handleStep.bind(this, 1)}
            >
              <Typography className={classes.nextFont}>
                Create Account
              </Typography>
            </Button>
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={this.handleExit}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {

// }

export default withStyles(style)(FormDialog);
