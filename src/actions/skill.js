import axios from "axios";
import { BASE_URL } from "./config";

export function addSkill(student_id, skill_id) {
  return dispatch => {
    dispatch(addSkillBegin());
    axios({
      method: "POST",
      url: BASE_URL + "student_skills",
      params: {
        student_id,
        skill_id
      }
    })
      .then(_ => {
        dispatch(addSkillSuccess());
      })
      .catch(error => dispatch(addSkillFailure(error)));
  };
}

export const ADD_SKILL_BEGIN = "ADD_SKILL_BEGIN";
export const ADD_SKILL_SUCCESS = "ADD_SKILL_SUCCESS";
export const ADD_SKILL_FAILURE = "ADD_SKILL_FAILURE";

const addSkillBegin = () => ({
  type: ADD_SKILL_BEGIN
});

const addSkillSuccess = skills => ({
  type: ADD_SKILL_SUCCESS
});

const addSkillFailure = error => ({
  type: ADD_SKILL_FAILURE,
  payload: { error }
});

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

const fetchSkillsBegin = () => ({
  type: FETCH_SKILLS_BEGIN
});

const fetchSkillsSuccess = skills => ({
  type: FETCH_SKILLS_SUCCESS,
  payload: { skills }
});

const fetchSkillsFailure = error => ({
  type: FETCH_SKILLS_FAILURE,
  payload: { error }
});
