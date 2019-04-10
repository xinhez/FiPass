import axios from "axios";
import { BASE_URL } from "./config";

export function fetchCompanies() {
  return dispatch => {
    dispatch(fetchCompaniesBegin());
    axios({
      method: "GET",
      url: BASE_URL + "companies"
    })
      .then(response => {
        dispatch(fetchCompaniesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCompaniesFailure(error));
      });
  };
}

export const FETCH_COMPANIES_BEGIN = "FETCH_COMPANIES_BEGIN";
export const FETCH_COMPANIES_SUCCESS = "FETCH_COMPANIES_SUCCESS";
export const FETCH_COMPANIES_FAILURE = "FETCH_COMPANIES_FAILURE";

export const fetchCompaniesBegin = () => ({
  type: FETCH_COMPANIES_BEGIN
});

export const fetchCompaniesSuccess = companies => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: { companies }
});

export const fetchCompaniesFailure = error => ({
  type: FETCH_COMPANIES_FAILURE,
  payload: { error }
});
