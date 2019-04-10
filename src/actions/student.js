import axios from "axios";
import { BASE_URL } from "./config";

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
    console.log("create", userInfo);
    dispatch(createStudentBegin());
    axios({
      method: "POST",
      url: BASE_URL + "students",
      params: {
        ...userInfo
      }
    })
      .then(response => {
        console.log("success", response);
        dispatch(createStudentSuccess(response.data));
      })
      .catch(error => {
        console.log("failure", error);
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
