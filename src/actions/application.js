import axios from "axios";
import { BASE_URL } from "./config";

export function fetchApplications(Authorization) {
  return dispatch => {
    dispatch(fetchApplicationsBegin());
    axios({
      method: "GET",
      url: BASE_URL + "applications",
      headers: {
        Authorization
      }
    })
      .then(response => {
        dispatch(fetchApplicationsSuccess(response.data));
      })
      .catch(error => dispatch(fetchApplicationsFailure(error)));
  };
}

export const FETCH_APPLICATIONS_BEGIN = "FETCH_APPLICATIONS_BEGIN";
export const FETCH_APPLICATIONS_SUCCESS = "FETCH_APPLICATIONS_SUCCESS";
export const FETCH_APPLICATIONS_FAILURE = "FETCH_APPLICATIONS_FAILURE";

const fetchApplicationsBegin = () => ({
  type: FETCH_APPLICATIONS_BEGIN
});

const fetchApplicationsSuccess = applications => ({
  type: FETCH_APPLICATIONS_SUCCESS,
  payload: { applications }
});

const fetchApplicationsFailure = error => ({
  type: FETCH_APPLICATIONS_FAILURE,
  payload: { error }
});
