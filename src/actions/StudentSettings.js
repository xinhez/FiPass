import axios from "axios";

export function patchStudentSettingsInfo(settings) {
  console.log("Start Patching Student Info Information");
  return dispatch => {
    dispatch(postSignUpInformationBegin());
    axios({
      method: "PATCH",
      url: "haven't know yet",
      data: {
        // part of them
        Email: settings.Email,
        PassWord: settings.PassWord,
        FirstName: settings.FirstName,
        LastName: settings.LastName,
        School: settings.School,
        GradYear: settings.GradYear,
        Major1: settings.Major1,
        Major2: settings.Major2,
        Phone: settings.Phone,
        Resume: settings.Resume,
        Skills: settings.Skills
      }
    })
      .then(data => dispatch(postSignUpInformationSuccess(data.data.data)))
      .catch(error => dispatch(postSignUpInformationFailure(error)));
  };
}

export const PATCN_STUDENTSETTINGS_BEGIN = "PATCN_STUDENTSETTINGS_BEGIN";
export const PATCN_STUDENTSETTINGS_SUCCESS = "PATCN_STUDENTSETTINGS_SUCCESS";
export const PATCN_STUDENTSETTINGS_FAILURE = "PATCN_STUDENTSETTINGS_FAILURE";
export const PATCN_STUDENTSETTINGS_SAMEEMAIL =
  "PATCN_STUDENTSETTINGS_SAMEEMAIL";

export const postSignUpInformationBegin = () => ({
  type: PATCN_STUDENTSETTINGS_BEGIN
});

export const postSignUpInformationSuccess = Settings => ({
  type: PATCN_STUDENTSETTINGS_SUCCESS,
  payload: { Settings }
});

export const postSignUpInformationFailure = error => ({
  type: PATCN_STUDENTSETTINGS_FAILURE,
  payload: { error }
});
