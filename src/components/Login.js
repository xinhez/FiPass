import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, InputLabel, Select } from "@material-ui/core";

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
    />
  );
}

class FormDialog extends Component {
  constructor() {
    super();
    this.state = {
      openStep: 0,
      email: "xxx@gmail.com",
      UserName: "",
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
      selectedIndex: -1
    };

    this.handleStep = this.handleStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createGradYear() {
    var gradYears = Array();
    for (var i = 1990; i <= 2020; i++) gradYears.push(i);
    return gradYears;
  }

  handleStep(v, event) {
    if (this.state.openStep + v > 3) {
      this.state.openStep = 0;
    } else if (this.state.openStep + v < 0) {
      this.state.openStep = 0;
    } else {
      this.state.openStep += v;
    }
    // console.log(this.state.openStep)
    this.setState({
      openStep: this.state.openStep
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleMenuItemClick(event, index) {
    console.log(index);
    console.log(this.state.GradYear);
    this.setState({
      GradYear: gradYears[index],
      selectedIndex: index
    });
  }

  render() {
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
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign up 1/3</DialogTitle>
          <DialogContent>
            <DialogContentText>Let's get started</DialogContentText>
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
            <Button onClick={this.handleStep.bind(this, -1)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleStep.bind(this, 1)}
              color="primary"
              size="medium"
            >
              Next Step
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 2}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign up 2/3</DialogTitle>
          <DialogContent>
            <DialogContentText>Second Sign up step</DialogContentText>
            <CommonInfoTextField
              id="FirstName"
              label="FirstName"
              type="text"
              onChange={this.handleChange}
              value={this.state.FirstName}
            />
            <CommonInfoTextField
              id="MiddleName"
              label="MiddleName"
              type="text"
              onChange={this.handleChange}
              value={this.state.MiddleName}
            />
            <CommonInfoTextField
              id="LastName"
              label="LastName"
              type="text"
              onChange={this.handleChange}
              value={this.state.LastName}
            />
            <CommonInfoTextField
              id="School"
              label="School"
              type="text"
              onChange={this.handleChange}
              value={this.state.School}
            />
            <CommonInfoTextField
              id="Degree"
              label="Degree"
              type="text"
              onChange={this.handleChange}
              value={this.state.Degree}
            />
            <FormControl>
              <InputLabel>GradYear</InputLabel>
              <Select
                native
                id="GradYear"
                value={this.state.GradYear}
                onChange={this.handleChange}
              >
                {gradYears.map((value, index) => (
                  <option
                    key={value.toString()}
                    selected={index === this.state.selectedIndex}
                    onClick={event =>
                      this.handleMenuItemClick.bind(event, index)
                    }
                  >
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              select
              margin="dense"
              id="GradYear"
              label="GradYear"
              fullWidth
              onChange={this.handleChange.bind(this)}
              value={this.state.GradYear}
            >
              {gradYears.map((option, index) => (
                <MenuItem
                  key={option.toString()}
                  selected={index === this.state.selectedIndex}
                  onClick={e => this.handleMenuItemClick.bind(e, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <CommonInfoTextField
              id="Major1"
              label="Major1"
              type="text"
              onChange={this.handleChange}
              value={this.state.Major1}
            />
            <CommonInfoTextField
              id="Major2"
              label="Major2"
              type="text"
              onChange={this.handleChange}
              value={this.state.Major2}
            />
            <CommonInfoTextField
              id="Phone"
              label="Phone"
              type="text"
              onChange={this.handleChange}
              value={this.state.Phone}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleStep.bind(this, -1)} color="primary">
              previous
            </Button>
            <Button onClick={this.handleStep.bind(this, 1)} color="primary">
              Next Step
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openStep === 3}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign up 3/3</DialogTitle>
          <DialogContent>
            <DialogContentText>Last Sign up step!</DialogContentText>
            <CommonInfoTextField
              id="Phone"
              label="Phone"
              type="text"
              onChange={this.handleChange}
              value={this.state.Phone}
            />
            <CommonInfoTextField
              id="Phone"
              label="Phone"
              type="text"
              onChange={this.handleChange}
              value={this.state.Phone}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleStep.bind(this, -1)} color="primary">
              Prev
            </Button>
            <Button onClick={this.handleStep.bind(this, 1)} color="primary">
              Finish
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
