import {
  PATCN_STUDENTSETTINGS_BEGIN,
  ATCN_STUDENTSETTINGS_SUCCESS,
  PATCN_STUDENTSETTINGS_FAILURE,
  ATCN_STUDENTSETTINGS_SAMEEMAIL
} from "../actions/StudentSettings";

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case PATCN_STUDENTSETTINGS_BEGIN:
      return {
        ...state,
        patchingSettings: true,
        patchedSettings: false,
        sameEmail: false,
        error: null
      };
    case ATCN_STUDENTSETTINGS_SUCCESS:
      return {
        ...state,
        patchingSettings: false,
        patchedSettings: true,
        sameEmail: false
      };
    case PATCN_STUDENTSETTINGS_FAILURE:
      return {
        ...state,
        patchingSettings: false,
        patchedSettings: false,
        emailValidate: false,
        error: action.payload.error
      };
    case ATCN_STUDENTSETTINGS_SAMEEMAIL:
      return {
        ...state,
        patchingSettings: false,
        patchedSettings: false,
        emailValidate: true
      };
    default:
      return state;
  }
}
