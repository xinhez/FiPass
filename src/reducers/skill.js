import {
  ADD_SKILL_BEGIN,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
  FETCH_SKILLS_BEGIN,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAILURE
} from "../actions/skill";

const initialState = {
  skills: [],
  fetchingSkills: false,
  error: null
};

export default function skillReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SKILL_BEGIN:
      return {
        ...state,
        fetchingSkills: true,
        error: null
      };
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        fetchingSkills: false,
        error: null
      };
    case ADD_SKILL_FAILURE:
      return {
        ...state,
        fetchingSkills: false,
        error: action.payload.error
      };
    case FETCH_SKILLS_BEGIN:
      return {
        ...state,
        fetchingSkills: true,
        skills: [],
        error: null
      };
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        fetchingSkills: false,
        skills: action.payload.skills,
        error: null
      };
    case FETCH_SKILLS_FAILURE:
      return {
        ...state,
        fetchingSkills: false,
        skills: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
