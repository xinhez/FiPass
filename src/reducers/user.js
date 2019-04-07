import {
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../actions/user";

export const USER_ROLE_COMPANY = false;
export const USER_ROLE_STUDENT = true;

const initialState = {
  id: 0,
  token: null,
  loggingInUser: false,
  role: USER_ROLE_STUDENT,
  error: null
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_BEGIN:
      return {
        ...state,
        loggingInUser: true,
        error: null
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggingInUser: false,
        id: action.payload.id,
        token: action.payload.token,
        role: action.payload.role
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loggingInUser: false,
        id: -1,
        token: null,
        error: action.payload.error
      };
    default:
      return state;
  }
}
