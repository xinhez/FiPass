import {
  FETCH_COMPANIES_BEGIN,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
  FETCH_COMPANYINFO_BEGIN,
  FETCH_COMPANYINFO_SUCCESS,
  FETCH_COMPANYINFO_FAILURE,
  POST_LIKEPOSTION_BEGIN,
  POST_LIKEPOSTION_SUCCESS,
  POST_LIKEPOSTION_FAILURE
} from "../actions/company";

const initialState = {
  companies: [],
  companyInfo: null,
  fetchingCompanies: false,
  fetchingCompanyInfo: false,
  error: null,
  postSuccess: false
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES_BEGIN:
      console.log("action:", action);

      return {
        ...state,
        fetchingCompanies: true,
        error: null
      };
    case FETCH_COMPANIES_SUCCESS:
      console.log("action:", action);
      return {
        ...state,
        fetchingCompanies: false,
        companies: action.payload.companies
      };
    case FETCH_COMPANIES_FAILURE:
      console.log("action:", action);

      return {
        ...state,
        fetchingCompanies: false,
        companies: [],
        error: action.payload.error
      };
    case FETCH_COMPANYINFO_BEGIN:
      console.log("action:", action);
      return {
        ...state,
        fetchingCompanyInfo: true,
        error: null
      };
    case FETCH_COMPANYINFO_SUCCESS:
      console.log("action:", action);
      return {
        ...state,
        fetchingCompanyInfo: false,
        companyInfo: action.payload.companyInfo
      };
    case FETCH_COMPANYINFO_FAILURE:
      console.log("action:", action);
      return {
        ...state,
        fetchingCompanyInfo: false,
        companyInfo: [],
        error: action.payload.error
      };
    case POST_LIKEPOSTION_BEGIN:
      console.log("action:", action);
      return {
        ...state,
        postLikePostion: true,
        error: null
      };
    case POST_LIKEPOSTION_SUCCESS:
      console.log("action:", action);
      return {
        ...state,
        postLikePostion: false
      };
    case POST_LIKEPOSTION_FAILURE:
      console.log("action:", action);
      return {
        ...state,
        postLikePostion: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
