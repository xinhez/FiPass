import axios from "axios";

export function fetchCompanies() {
  console.log("fetching company");
  return dispatch => {
    dispatch(fetchCompaniesBegin());
    axios({
      method: "GET",
      url: "http://localhost:3000/companies"
    })
      .then(response => dispatch(fetchCompaniesSuccess(response.data)))
      .catch(error => dispatch(fetchCompaniesFailure(error)));
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

export function fetchCompanyInfo(id) {
  console.log("fetching fetchCompanyInfo");
  return dispatch => {
    dispatch(fetchCompanyInfoBegin());
    axios({
      method: "GET",
      url: "http://localhost:3000/companies/" + String(id)
    })
      .then(response => dispatch(fetchCompanyInfoSuccess(response.data)))
      .catch(error => dispatch(fetchCompanyInfoFailure(error)));
  };
}

export const FETCH_COMPANYINFO_BEGIN = "FETCH_COMPANYINFO_BEGIN";
export const FETCH_COMPANYINFO_SUCCESS = "FETCH_COMPANYINFO_SUCCESS";
export const FETCH_COMPANYINFO_FAILURE = "FETCH_COMPANYINFO_FAILURE";

export const fetchCompanyInfoBegin = () => ({
  type: FETCH_COMPANYINFO_BEGIN
});

export const fetchCompanyInfoSuccess = companyInfo => ({
  type: FETCH_COMPANYINFO_SUCCESS,
  payload: { companyInfo }
});

export const fetchCompanyInfoFailure = error => ({
  type: FETCH_COMPANYINFO_FAILURE,
  payload: { error }
});

export function postlikePosition(stu_id, pos_id) {
  console.log("likePosition");
  return dispatch => {
    dispatch(postlikePositionBegin());
    axios({
      method: "POST",
      url: "http://localhost:3000/likes",
      data: {
        student_id: stu_id,
        position_id: pos_id
      }
    })
      .then(response => dispatch(postlikePositionSuccess(response.data)))
      .catch(error => dispatch(postlikePositionFailure(error)));
  };
}

export const POST_LIKEPOSTION_BEGIN = "POST_LIKEPOSTION_BEGIN";
export const POST_LIKEPOSTION_SUCCESS = "POST_LIKEPOSTION_SUCCESS";
export const POST_LIKEPOSTION_FAILURE = "POST_LIKEPOSTION_FAILURE";

export const postlikePositionBegin = () => ({
  type: POST_LIKEPOSTION_BEGIN
});

export const postlikePositionSuccess = companyInfo => ({
  type: POST_LIKEPOSTION_SUCCESS,
  payload: { companyInfo }
});

export const postlikePositionFailure = error => ({
  type: POST_LIKEPOSTION_FAILURE,
  payload: { error }
});
