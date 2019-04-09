import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import "../../common/Dialog.css";
import "./StudentSignUp.css";

const initialState = {
  email: "",
  password: "",
  password_confirmation: "",
  first_name: "",
  last_name: "",
  phone: "",
  school: "",
  degree: 0,
  graduation_year: 2019,
  major_1: "",
  major_2: "",
  skillIds: new Set([]),
  step: 1
};

class StudentSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this._handleValueChange = this._handleValueChange.bind(this);
    this._handleSelectSkill = this._handleSelectSkill.bind(this);
  }

  _handleValueChange(value) {
    this.setState({ ...value });
  }

  render() {
    const { step } = this.state;
    const { open } = this.props;
    return (
      <Dialog className="studentSignUp" maxWidth={"md"} open={open}>
        {step === 1 && this.renderStepOne()}
        {step === 2 && this.renderStepTwo()}
        {step === 3 && this.renderStepThree()}
        {step === 4 && this.renderStepFour()}
      </Dialog>
    );
  }

  renderStepOne() {
    const { email, password, password_confirmation, step } = this.state;
    return (
      <div>
        <Typography className="Dialog-title" variant="title">
          Sign Up 1/4
        </Typography>
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          id="email"
          value={email}
          onChange={e => this._handleValueChange({ email: e.target.value })}
          label="Email"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={password}
          onChange={e => this._handleValueChange({ password: e.target.value })}
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={password_confirmation}
          onChange={e =>
            this._handleValueChange({ password_confirmation: e.target.value })
          }
          id="password_confirmation"
          label="Re-enter Password"
          type="password"
          fullWidth
        />
        <Button
          className="Button-primary"
          variant="contained"
          onClick={_ => this._handleValueChange({ step: step + 1 })}
          color="primary"
        >
          Continue
        </Button>
        <Button onClick={_ => this.props.closeForm()} color="primary">
          Cancel
        </Button>
      </div>
    );
  }

  renderStepTwo() {
    const {
      first_name,
      last_name,
      phone,
      school,
      major_1,
      major_2,
      graduation_year,
      degree,
      step
    } = this.state;
    return (
      <div>
        <Typography className="Dialog-title" variant="title">
          Sign Up 2/4
        </Typography>
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={first_name}
          onChange={e =>
            this._handleValueChange({ first_name: e.target.value })
          }
          id="first_name"
          label="First Name"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={last_name}
          onChange={e => this._handleValueChange({ last_name: e.target.value })}
          id="last_name"
          label="Last Name"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={phone}
          onChange={e => this._handleValueChange({ phone: e.target.value })}
          id="phone"
          label="Phone"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={school}
          onChange={e => this._handleValueChange({ school: e.target.value })}
          id="school"
          label="School"
          fullWidth
        />
        <FormControl variant="outlined">
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
          >
            Graduation Year
          </InputLabel>
          <Select
            value={graduation_year}
            onChange={e =>
              this._handleValueChange({ graduation_year: e.target.value })
            }
            input={
              <OutlinedInput
                labelWidth={20}
                name="Graduation Year"
                id="graduation_year"
              />
            }
          >
            {[...Array(20).keys()].map(x => (
              <MenuItem key={x} value={2009 + x}>
                {2009 + x}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Degree</InputLabel>
          <Select
            value={degree}
            onChange={e => this._handleValueChange({ degree: e.target.value })}
            input={<OutlinedInput labelWidth={20} name="Degree" id="degree" />}
          >
            <MenuItem value={0}>Undergraudate</MenuItem>
            <MenuItem value={1}>Master</MenuItem>
            <MenuItem value={2}>PhD</MenuItem>
            <MenuItem value={3}>Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          required
          value={major_1}
          onChange={e => this._handleValueChange({ major_1: e.target.value })}
          id="major_1"
          label="Major"
          fullWidth
        />
        <TextField
          className="Dialog-textField"
          variant="outlined"
          margin="normal"
          value={major_2}
          onChange={e => this._handleValueChange({ major_2: e.target.value })}
          id="major_2"
          label="Additional Major (Optional)"
          fullWidth
        />
        <Button
          className="Button-primary"
          variant="contained"
          onClick={_ => this._handleValueChange({ step: step + 1 })}
          color="primary"
        >
          Continue
        </Button>
      </div>
    );
  }

  _handleSelectSkill(skillIds, id) {
    if (skillIds.has(id)) {
      skillIds.delete(id);
    } else {
      skillIds.add(id);
    }
    this._handleValueChange({ skillIds });
  }

  renderStepThree() {
    const { skillIds, step } = this.state;
    const { skills } = this.props;
    return (
      <div>
        <Typography className="Dialog-title" variant="title">
          Sign Up 3/4
        </Typography>
        <Typography variant="body1">Tap to Select what defines you</Typography>
        {skills.map(skill =>
          skillIds.has(skill.id) ? (
            <Button
              variant="contained"
              className="Button-primary"
              key={skill.id}
              onClick={_ => this._handleSelectSkill(skillIds, skill.id)}
            >
              {skill.name}
            </Button>
          ) : (
            <Button
              variant="outlined"
              className="Button-secondary"
              key={skill.id}
              onClick={_ => this._handleSelectSkill(skillIds, skill.id)}
            >
              {skill.name}
            </Button>
          )
        )}
        <Button
          className="Button-primary"
          variant="contained"
          onClick={_ => this._handleValueChange({ step: step + 1 })}
          color="primary"
        >
          Continue
        </Button>
      </div>
    );
  }

  renderStepFour() {
    const { step } = this.state;
    return (
      <div>
        <Typography className="Dialog-title" variant="title">
          Sign Up 4/4
        </Typography>
        <Typography variant="body1">
          Upload resume to help recruiter know you better
        </Typography>
        <Typography className="Dialog-title" variant="body2">
          Upload Resume
        </Typography>
        <form ref={el => (this.form = el)}>
          <input
            type="file"
            name="resume"
            id="resume_upload"
            accept="image/*, application/pdf"
          />
        </form>
        <Button
          className="Button-primary"
          variant="contained"
          onClick={_ => {
            const resume = new FormData(this.form);
            this.props.onClickSignUp({ ...this.state, resume });
          }}
          color="primary"
        >
          Create My Account
        </Button>
      </div>
    );
  }
}

StudentSignUp.propTypes = {
  closeForm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired
};

export default StudentSignUp;
