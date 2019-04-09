import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export function fetchSkills() {
  return dispatch => {
    dispatch(fetchSkillsBegin());
    axios({
      method: "GET",
      url: BASE_URL + "skills"
    })
      .then(response => {
        dispatch(fetchSkillsSuccess(response.data));
      })
      .catch(error => dispatch(fetchSkillsFailure(error)));
  };
}

export const FETCH_SKILLS_BEGIN = "FETCH_SKILLS_BEGIN";
export const FETCH_SKILLS_SUCCESS = "FETCH_SKILLS_SUCCESS";
export const FETCH_SKILLS_FAILURE = "FETCH_SKILLS_FAILURE";

export const fetchSkillsBegin = () => ({
  type: FETCH_SKILLS_BEGIN
});

export const fetchSkillsSuccess = skills => ({
  type: FETCH_SKILLS_SUCCESS,
  payload: { skills }
});

export const fetchSkillsFailure = error => ({
  type: FETCH_SKILLS_FAILURE,
  payload: { error }
});
