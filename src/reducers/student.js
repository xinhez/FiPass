import {
  FETCH_STUDENTS_BEGIN,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_LIKES_BEGIN,
  FETCH_LIKES_SUCCESS,
  FETCH_LIKES_FAILURE,
  DELETE_LIKE_POSITION_BEGIN,
  DELETE_LIKE_POSITION_SUCCESS,
  DELETE_LIKE_POSITION_FAILURE,
  LIKE_POSITION_BEGIN,
  LIKE_POSITION_SUCCESS,
  LIKE_POSITION_FAILURE
} from "../actions/student";

const initialState = {
  students: [],
  likes: [],
  fetchingStudents: false,
  fetchingLikes: false,
  likePosition: false,
  deleteLikePosition: false,
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
    case FETCH_LIKES_BEGIN:
      return {
        ...state,
        fetchingLikes: true,
        error: null
      };
    case FETCH_LIKES_SUCCESS:
      console.log("FETCH_LIKES_SUCCESS:", action);
      return {
        ...state,
        fetchingLikes: false,
        // TODO like
        likes: action.payload.students
      };
    case FETCH_LIKES_FAILURE:
      return {
        ...state,
        fetchingLikes: false,
        likes: [],
        error: action.payload.error
      };

    case DELETE_LIKE_POSITION_BEGIN:
      return {
        ...state,
        deleteLikePosition: true,
        error: null
      };
    case DELETE_LIKE_POSITION_SUCCESS:
      return {
        ...state,
        deleteLikePosition: false
      };
    case DELETE_LIKE_POSITION_FAILURE:
      return {
        ...state,
        deleteLikePosition: false,
        error: action.payload.error
      };

    case LIKE_POSITION_BEGIN:
      return {
        ...state,
        likePosition: true,
        error: null
      };
    case LIKE_POSITION_SUCCESS:
      return {
        ...state,
        likePosition: false
      };
    case LIKE_POSITION_FAILURE:
      return {
        ...state,
        likePosition: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
