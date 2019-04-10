import {
  FETCH_APPLICATIONS_BEGIN,
  FETCH_APPLICATIONS_SUCCESS,
  FETCH_APPLICATIONS_FAILURE
} from "../actions/application";

const initialState = {
  fetchingApplications: false,
  applications: [],
  error: null
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_APPLICATIONS_BEGIN:
      return {
        ...state,
        fetchingApplications: true,
        applications: [],
        error: null
      };
    case FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        fetchingApplications: false,
        applications: action.payload.applications,
        error: null
      };
    case FETCH_APPLICATIONS_FAILURE:
      return {
        ...state,
        fetchingApplications: false,
        applications: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
