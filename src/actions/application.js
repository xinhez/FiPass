import axios from "axios";
import { BASE_URL } from "./config";

export function addApplicant(Authorization, company_id, student_id) {
  return dispatch => {
    dispatch(addApplicantBegin());
    axios({
      method: "POST",
      url: BASE_URL + "applications",
      headers: {
        Authorization
      },
      params: {
        student_id,
        company_id
      }
    })
      .then(response => {
        dispatch(addApplicantSuccess(response.data));
      })
      .catch(error => dispatch(addApplicantFailure(error)));
  };
}

export const ADD_APPLICATION_BEGIN = "ADD_APPLICATION_BEGIN";
export const ADD_APPLICATION_SUCCESS = "ADD_APPLICATION_SUCCESS";
export const ADD_APPLICATION_FAILURE = "ADD_APPLICATION_FAILURE";

const addApplicantBegin = () => ({
  type: ADD_APPLICATION_BEGIN
});

const addApplicantSuccess = application => ({
  type: ADD_APPLICATION_SUCCESS,
  payload: { application }
});

const addApplicantFailure = error => ({
  type: ADD_APPLICATION_FAILURE,
  payload: { error }
});

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
