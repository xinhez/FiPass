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

export function fetchLikes(Authorization) {
  return dispatch => {
    dispatch(fetchLikesBegin());
    axios({
      method: "GET",
      url: BASE_URL + "likes",
      headers: {
        Authorization
      }
    })
      .then(response => {
        dispatch(fetchLikesSuccess(response.data));
      })
      .catch(error => dispatch(fetchLikesFailure(error)));
  };
}

export const FETCH_LIKES_BEGIN = "FETCH_LIKES_BEGIN";
export const FETCH_LIKES_SUCCESS = "FETCH_LIKES_SUCCESS";
export const FETCH_LIKES_FAILURE = "FETCH_LIKES_FAILURE";

const fetchLikesBegin = () => ({
  type: FETCH_LIKES_BEGIN
});

const fetchLikesSuccess = students => ({
  type: FETCH_LIKES_SUCCESS,
  payload: { students }
});

const fetchLikesFailure = error => ({
  type: FETCH_LIKES_FAILURE,
  payload: { error }
});

export function deletelikePosition(Authorization, id) {
  return dispatch => {
    dispatch(deletelikePositionBegin());
    axios({
      method: "DELETE",
      url: BASE_URL + "likes/" + String(id),
      headers: {
        Authorization
      }
    })
      .then(response => {
        dispatch(deletelikePositionSuccess(response.data));
      })
      .catch(error => dispatch(deletelikePositionFailure(error)));
  };
}

export const DELETE_LIKE_POSITION_BEGIN = "DELETE_LIKE_POSITION_BEGIN";
export const DELETE_LIKE_POSITION_SUCCESS = "DELETE_LIKE_POSITION_SUCCESS";
export const DELETE_LIKE_POSITION_FAILURE = "DELETE_LIKE_POSITION_FAILURE";

const deletelikePositionBegin = () => ({
  type: DELETE_LIKE_POSITION_BEGIN
});

const deletelikePositionSuccess = students => ({
  type: DELETE_LIKE_POSITION_SUCCESS,
  payload: { students }
});

const deletelikePositionFailure = error => ({
  type: DELETE_LIKE_POSITION_FAILURE,
  payload: { error }
});

export function likePosition(Authorization, student_id, position_id) {
  return dispatch => {
    console.log("likePosition", Authorization, student_id, position_id);
    dispatch(likePositionBegin());
    axios({
      method: "POST",
      url: BASE_URL + "likes",
      headers: {
        Authorization
      },
      params: {
        student_id: student_id,
        position_id: position_id
      }
    })
      .then(response => {
        console.log("success", response);
        dispatch(likePositionSuccess(response.data));
      })
      .catch(error => {
        console.log("failure", error);
        dispatch(likePositionFailure(error));
      });
  };
}

export const LIKE_POSITION_BEGIN = "LIKE_POSITION_BEGIN";
export const LIKE_POSITION_SUCCESS = "LIKE_POSITION_SUCCESS";
export const LIKE_POSITION_FAILURE = "LIKE_POSITION_FAILURE";

const likePositionBegin = () => ({
  type: LIKE_POSITION_BEGIN
});

const likePositionSuccess = student => ({
  type: LIKE_POSITION_SUCCESS,
  payload: { student }
});

const likePositionFailure = error => ({
  type: LIKE_POSITION_FAILURE,
  payload: { error }
});
