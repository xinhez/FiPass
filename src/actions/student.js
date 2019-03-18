import axios from "axios";

export function fetchStudents() {
  console.log("fetching student");
  return dispatch => {
    dispatch(fetchStudentsBegin());
    axios({
      method: "GET",
      url: "/api/student"
    })
      .then(data => dispatch(fetchStudentsSuccess(data.data.data)))
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
