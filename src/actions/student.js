import axios from "axios";
import { BASE_URL } from "./config";
import { addSkill } from "./skill";
import { loginStudentUser } from "./user";

export function fetchStudents(Authorization) {
  return dispatch => {
    dispatch(fetchStudentsBegin());
    axios({
      method: "GET",
      url: BASE_URL + "students",
      headers: {
        Authorization
      }
    })
      .then(response => {
        dispatch(fetchStudentsSuccess(response.data));
      })
      .catch(error => dispatch(fetchStudentsFailure(error)));
  };
}

export const FETCH_STUDENTS_BEGIN = "FETCH_STUDENTS_BEGIN";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

const fetchStudentsBegin = () => ({
  type: FETCH_STUDENTS_BEGIN
});

const fetchStudentsSuccess = students => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: { students }
});

const fetchStudentsFailure = error => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: { error }
});

export function createStudent(userInfo) {
  return dispatch => {
    dispatch(createStudentBegin());
    axios({
      method: "POST",
      url: BASE_URL + "students",
      params: {
        ...userInfo
      }
    })
      .then(response => {
        dispatch(createStudentSuccess(response.data));
        dispatch(
          loginStudentUser({
            email: userInfo.email,
            password: userInfo.password
          })
        );
        userInfo.skillIds.forEach(skill_id => {
          dispatch(addSkill(response.data.id, skill_id));
        });
      })
      .catch(error => {
        dispatch(createStudentFailure(error));
      });
  };
}

export const CREATE_STUDENT_BEGIN = "CREATE_STUDENT_BEGIN";
export const CREATE_STUDENT_SUCCESS = "CREATE_STUDENT_SUCCESS";
export const CREATE_STUDENT_FAILURE = "CREATE_STUDENT_FAILURE";

const createStudentBegin = () => ({
  type: CREATE_STUDENT_BEGIN
});

const createStudentSuccess = student => ({
  type: CREATE_STUDENT_SUCCESS,
  payload: { student }
});

const createStudentFailure = error => ({
  type: CREATE_STUDENT_FAILURE,
  payload: { error }
});
