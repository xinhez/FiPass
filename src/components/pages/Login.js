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
  Paper,
  InputBase
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
    // position: "absolute",
    width: theme.spacing.unit * 80,
    height: theme.spacing.unit * 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    // left: 457,
    // top: 199,
    background: "#FFFFFF",
    borderRadius: 15
  },
  dialogBoxStep2: {
    width: theme.spacing.unit * 80,
    height: theme.spacing.unit * 90,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: 15
  },
  dialogBoxStep3: {
    width: theme.spacing.unit * 80,
    height: theme.spacing.unit * 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: 15
  },
  dialogBoxStep4: {
    width: theme.spacing.unit * 80,
    height: theme.spacing.unit * 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
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
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 2,
    background: "#51A8DD",
    borderRadius: 5
  },
  nextButtonStep2: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 4,
    background: "#51A8DD",
    borderRadius: 5
  },
  chipRoot: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2
  },
  skillsChip: {
    // padding: theme.spacing.unit * 4
    margin: theme.spacing.unit / 2,
    borderRadius: 5,
    border: "1px solid #DCDCDC;",
    backgroundColor: "#FFFFFF"
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  uploadButton: {
    variant: "outlined",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: theme.spacing.unit * 20,
    height: theme.spacing.unit * 15,
    marginLeft: theme.spacing.unit * 11,
    marginTop: theme.spacing.unit
  },
  uploadButtonColor: {
    color: "#FFFFFF"
  },
  uploadInput: {
    display: "none"
  },
  dialogContentText: {
    display: "flex",
    justifyContent: "center"
  },
  uploadResumeFont: {
    marginTop: theme.spacing.unit,
    color: "#51A8DD",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
    // position: "absolute",
    // width: 150,
    // height: 108,
    // left: 200,
    // top: 135
  },
  commonInfoTextField: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: theme.spacing.unit * 50,
    marginBottom: theme.spacing.unit * 2
  },
  commonInfoTextFieldInput: {
    border: "1px solid #AEAEAE",
    borderRadius: 5
  },
  commonInfoTextFieldTypo: {
    fontSize: 16,
    color: "#333333"
  },
  inputBaseRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 6
    },
    width: theme.spacing.unit * 24
  },
  commonInfoTextFieldTypoLeft: {
    float: "Left",
    marginBottom: theme.spacing.unit * 2
  },
  commonInfoTextFieldTypoRight: {
    float: "right",
    marginBottom: theme.spacing.unit * 2
  },
  inputBaseInput: {
    border: "1px solid #AEAEAE",
    borderRadius: 5,
    paddingLeft: 10
  }
});

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing.unit * 5
    }
  },
  input: {
    border: "1px solid #AEAEAE",
    borderRadius: 5,
    paddingLeft: 10
  }
}))(InputBase);

function CommonInfoTextField(props) {
  return (
    <div>
      <Typography
        classes={{
          root: props.classes.commonInfoTextFieldTypo
        }}
      >
        {props.labelName}
      </Typography>
      <InputBase
        autoFocus
        margin="dense"
        id={props.id}
        // label={props.label}
        // type={props.type}
        fullWidth
        onChange={props.onChange}
        value={props.value}
        variant="outlined"
        classes={{
          root: props.classes.commonInfoTextField,
          input: props.classes.inputBaseInput
        }}
      />
    </div>
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
              classes={classes}
              labelName={"Email"}
            />
            <CommonInfoTextField
              id="PassWord"
              label="PassWord"
              type="password"
              onChange={this.handleChange}
              value={this.state.PassWord}
              classes={classes}
              labelName={"PassWord"}
            />
            <CommonInfoTextField
              id="ComfirmedPassWord"
              label="Confirm PassWord"
              type="password"
              onChange={this.handleChange}
              value={this.state.ComfirmedPassWord}
              classes={classes}
              labelName={"Comfirm PassWord"}
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
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                <FormControl className={classes.commonInfoTextFieldTypoLeft}>
                  <InputLabel
                    disableAnimation={true}
                    shrink={false}
                    className={classes.commonInfoTextFieldTypo}
                  >
                    First Name
                  </InputLabel>
                  <InputBase
                    id="FirstName"
                    onChange={this.handleChange}
                    value={this.state.FirstName}
                    classes={{
                      root: classes.inputBaseRoot,
                      input: classes.inputBaseInput
                    }}
                  />
                </FormControl>

                <FormControl className={classes.commonInfoTextFieldTypoRight}>
                  <InputLabel
                    disableAnimation={true}
                    shrink={false}
                    className={classes.commonInfoTextFieldTypo}
                  >
                    Last Name
                  </InputLabel>
                  <InputBase
                    id="LastName"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.FirstName}
                    classes={{
                      root: classes.inputBaseRoot,
                      input: classes.inputBaseInput
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <CommonInfoTextField
              id="Phone"
              label="Phone"
              type="text"
              onChange={this.handleChange}
              value={this.state.Phone}
              classes={classes}
              labelName={"Phone"}
            />

            <CommonInfoTextField
              id="School"
              label="School"
              type="text"
              onChange={this.handleChange}
              value={this.state.School}
              classes={classes}
              labelName={"School"}
            />

            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                <FormControl className={classes.commonInfoTextFieldTypoLeft}>
                  <InputLabel
                    disableAnimation={true}
                    shrink={false}
                    className={classes.commonInfoTextFieldTypo}
                  >
                    Graduation Year
                  </InputLabel>
                  <Select
                    autoFocus
                    select
                    margin="dense"
                    id="outlined-select-gradYear"
                    label="GradYear"
                    onChange={this.handleMenuItemClick.bind(this, "GradYear")}
                    value={this.state.GradYear}
                    // variant="outlined"
                    classes={{
                      root: classes.inputBaseRoot
                      // select: classes.inputBaseInput
                    }}
                    input={
                      <BootstrapInput name="" id="age-customized-select" />
                    }
                  >
                    {gradYears.map((option, index) => (
                      <MenuItem key={option.toString()} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl className={classes.commonInfoTextFieldTypoRight}>
                  <InputLabel
                    disableAnimation={true}
                    shrink={false}
                    className={classes.commonInfoTextFieldTypo}
                  >
                    Degree
                  </InputLabel>
                  <Select
                    autoFocus
                    select
                    margin="dense"
                    id="outlined-select-degree"
                    label="Degree"
                    onChange={this.handleMenuItemClick.bind(this, "Degree")}
                    value={this.state.Degree}
                    // variant="outlined"
                    classes={{
                      root: classes.inputBaseRoot
                      // select: classes.inputBaseInput
                    }}
                    input={
                      <BootstrapInput name="" id="age-customized-select" />
                    }
                  >
                    {degrees.map((option, index) => (
                      <MenuItem key={option.toString()} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <CommonInfoTextField
              id="Major1"
              label="Major1"
              type="text"
              onChange={this.handleChange}
              value={this.state.Major1}
              labelName={"Major 1"}
              classes={classes}
              isFloat={false}
            />

            <CommonInfoTextField
              id="Major2"
              label="Major2"
              type="text"
              onChange={this.handleChange}
              value={this.state.Major2}
              labelName={"Major 2"}
              classes={classes}
              isFloat={false}
            />
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
                    classes={{
                      root: classes.skillsChip
                      // label: classes.skillsChipLabel,
                    }}
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
            {/* <Grid className={classes.chipRoot}> */}
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
                // className={classes.uploadButton}
                classes={{
                  root: classes.uploadButton,
                  containd: classes.uploadButtonColor
                }}
              >
                <AddIcon />
              </Button>
            </label>
            {/* </Grid> */}
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
