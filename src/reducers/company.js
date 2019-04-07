import {
  FETCH_COMPANIES_BEGIN,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE
} from "../actions/company";

const initialState = {
  companies: [],
  companyInfo: null,
  fetchingCompanies: false,
  fetchingCompanyInfo: false,
  error: null
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES_BEGIN:
      return {
        ...state,
        fetchingCompanies: true,
        error: null
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        fetchingCompanies: false,
        companies: action.payload.companies
      };
    case FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        fetchingCompanies: false,
        companies: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
