import {
  FETCH_COMPANIES_BEGIN,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
  FETCH_COMPANYINFO_BEGIN,
  FETCH_COMPANYINFO_SUCCESS,
  FETCH_COMPANYINFO_FAILURE
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
    case FETCH_COMPANYINFO_BEGIN:
      return {
        ...state,
        fetchingCompanyInfo: true,
        error: null
      };
    case FETCH_COMPANYINFO_SUCCESS:
      return {
        ...state,
        fetchingCompanyInfo: false,
        companyInfo: action.payload.companyInfo
      };
    case FETCH_COMPANYINFO_FAILURE:
      return {
        ...state,
        fetchingCompanyInfo: false,
        companyInfo: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
