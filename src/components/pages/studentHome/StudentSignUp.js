import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonBase,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import { Close, NavigateBefore } from "@material-ui/icons";
import "../../common/Component.css";
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
      <Dialog className="studentSignUp" fullWidth maxWidth={"sm"} open={open}>
        <div className="studentSignUp-button-top-container">
          {step !== 1 && (
            <ButtonBase className="studentSignUp-before">
              <NavigateBefore
                className="Button-icon"
                onClick={_ => this._handleValueChange({ step: step - 1 })}
              />
            </ButtonBase>
          )}
          <ButtonBase className="studentSignUp-close">
            <Close
              className="Button-icon"
              onClick={_ => this.props.closeForm()}
            />
          </ButtonBase>
        </div>
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
      <div className="studentSignUp-Dialog">
        <Typography
          className="Dialog-title studentSignUp-title"
          variant="title"
        >
          Sign Up 1 / 4
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
          className="Button-primary studentSignUp-bottom-button"
          variant="contained"
          onClick={_ => this._handleValueChange({ step: step + 1 })}
          color="primary"
        >
          Next
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
      <div className="studentSignUp-Dialog">
        <Typography
          className="Dialog-title studentSignUp-title"
          variant="title"
        >
          Sign Up 2 / 4
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
        <div className="studentSignUp-row">
          <TextField
            className="studentSignUp-row-left"
            select
            variant="outlined"
            margin="normal"
            required
            value={graduation_year}
            onChange={e =>
              this._handleValueChange({ graduation_year: e.target.value })
            }
            id="graduation_year"
            label="Graduation Year"
            fullWidth
          >
            {[...Array(20).keys()].map(x => (
              <MenuItem key={x} value={2009 + x}>
                {2009 + x}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="studentSignUp-row-right"
            select
            variant="outlined"
            margin="normal"
            required
            value={degree}
            onChange={e => this._handleValueChange({ degree: e.target.value })}
            id="degree"
            label="Degree"
            fullWidth
          >
            <MenuItem value={0}>Undergraudate</MenuItem>
            <MenuItem value={1}>Master</MenuItem>
            <MenuItem value={2}>PhD</MenuItem>
            <MenuItem value={3}>Other</MenuItem>
          </TextField>
        </div>
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
          className="Button-primary studentSignUp-bottom-button"
          variant="contained"
          onClick={_ => this._handleValueChange({ step: step + 1 })}
          color="primary"
        >
          Next
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
      <div className="studentSignUp-Dialog">
        <Typography
          className="Dialog-title studentSignUp-title"
          variant="title"
        >
          Sign Up 3 / 4
        </Typography>
        <Typography variant="body1">Tap to Select what defines you</Typography>
        <div className="studentSignUp-table">
          {skills.map(skill =>
            skillIds.has(skill.id) ? (
              <Button
                variant="contained"
                className="Button-primary studentSignUp-skill"
                key={skill.id}
                onClick={_ => this._handleSelectSkill(skillIds, skill.id)}
              >
                {skill.name}
              </Button>
            ) : (
              <Button
                variant="outlined"
                className="Button-secondary studentSignUp-skill"
                key={skill.id}
                onClick={_ => this._handleSelectSkill(skillIds, skill.id)}
              >
                {skill.name}
              </Button>
            )
          )}
        </div>
        <Button
          className="Button-primary studentSignUp-bottom-button"
          variant="contained"
          onClick={_ => this._handleValueChange({ step: step + 1 })}
          color="primary"
        >
          Next
        </Button>
      </div>
    );
  }

  renderStepFour() {
    const { step } = this.state;
    return (
      <div className="studentSignUp-Dialog">
        <Typography
          className="Dialog-title studentSignUp-title"
          variant="title"
        >
          Sign Up 4 / 4
        </Typography>
        <Typography variant="body1">
          Upload resume to help recruiter know you better
        </Typography>
        <Typography className="Dialog-title studentSignUp-body" variant="body2">
          Upload Resume
        </Typography>
        <form className="studentSignUp-form" ref={el => (this.form = el)}>
          <input
            type="file"
            name="resume"
            id="resume_upload"
            accept="image/*, application/pdf"
          />
        </form>
        <Button
          className="Button-primary studentSignUp-bottom-button"
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
