import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export function fetchStudents() {
  return dispatch => {
    dispatch(fetchStudentsBegin());
    axios({
      method: "GET",
      url: BASE_URL + "students"
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

export const fetchStudentsBegin = () => ({
  type: FETCH_STUDENTS_BEGIN
});

export const fetchStudentsSuccess = students => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: { students }
});

export const fetchStudentsFailure = error => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: { error }
});
