import axios from "axios";

export function postSignUpInformation(signInfo) {
  console.log("Start Fatching Sign Up Information");
  return dispatch => {
    dispatch(postSignUpInformationBegin());
    axios({
      method: "POST",
      url: "haven't know yet",
      data: {
        Email: signInfo.Email,
        PassWord: signInfo.PassWord,
        FirstName: signInfo.FirstName,
        LastName: signInfo.LastName,
        School: signInfo.School,
        GradYear: signInfo.GradYear,
        Major1: signInfo.Major1,
        Major2: signInfo.Major2,
        Phone: signInfo.Phone,
        Resume: signInfo.Resume,
        Skills: signInfo.Skills
      }
    })
      .then(data => dispatch(postSignUpInformationSuccess(data.data.data)))
      .catch(error => dispatch(postSignUpInformationFailure(error)));
  };
}

export const POST_SIGNUPINFO_BEGIN = "POST_SIGNUPINFO_BEGIN";
export const POST_SIGNUPINFO_SUCCESS = "POST_SIGNUPINFO_SUCCESS";
export const POST_SIGNUPINFO_FAILURE = "POST_SIGNUPINFO_FAILURE";
export const POST_SIGNUPINFO_SAMEEMAIL = "POST_SIGNUPINFO_SAMEEMAIL";

export const postSignUpInformationBegin = () => ({
  type: POST_SIGNUPINFO_BEGIN
});

export const postSignUpInformationSuccess = signupinfo => ({
  type: POST_SIGNUPINFO_SUCCESS,
  payload: { signupinfo }
});

export const postSignUpInformationFailure = error => ({
  type: POST_SIGNUPINFO_FAILURE,
  payload: { error }
});
