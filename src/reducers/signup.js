import {
  POST_SIGNUPINFO_BEGIN,
  POST_SIGNUPINFO_SUCCESS,
  POST_SIGNUPINFO_FAILURE,
  POST_SIGNUPINFO_SAMEEMAIL
} from "../actions/signup";

const initialState = {};

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case POST_SIGNUPINFO_BEGIN:
      return {
        ...state,
        postingSignUpInfo: true,
        postedSignUpInfo: false,
        sameEmail: false,
        error: null
      };
    case POST_SIGNUPINFO_SUCCESS:
      return {
        ...state,
        postingSignUpInfo: false,
        postedSignUpInfo: true,
        sameEmail: false
      };
    case POST_SIGNUPINFO_FAILURE:
      return {
        ...state,
        postingSignUpInfo: false,
        postedSignUpInfo: false,
        emailValidate: false,
        error: action.payload.error
      };
    case POST_SIGNUPINFO_SAMEEMAIL:
      return {
        ...state,
        postingSignUpInfo: false,
        postedSignUpInfo: false,
        emailValidate: true
      };
    default:
      return state;
  }
}
