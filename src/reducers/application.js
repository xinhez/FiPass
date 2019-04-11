import {
  ADD_APPLICATION_BEGIN,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_FAILURE,
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
    case ADD_APPLICATION_BEGIN:
      return {
        ...state,
        fetchingApplications: true,
        error: null
      };
    case ADD_APPLICATION_SUCCESS:
      return {
        ...state,
        fetchingApplications: false,
        applications: state.applications.concat([action.payload.application]),
        error: null
      };
    case ADD_APPLICATION_FAILURE:
      return {
        ...state,
        fetchingApplications: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
