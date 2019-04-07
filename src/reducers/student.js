import {
  FETCH_STUDENTS_BEGIN,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from "../actions/student";

const initialState = {
  students: [],
  fetchingStudents: false,
  error: null
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS_BEGIN:
      return {
        ...state,
        fetchingStudents: true,
        error: null
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        fetchingStudents: false,
        students: action.payload.students
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        fetchingStudents: false,
        students: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
