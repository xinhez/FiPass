import {
  FETCH_TAGS_BEGIN,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE
} from "../actions/tag";

const initialState = {
  fetchingTags: false,
  tags: [],
  error: null
};

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS_BEGIN:
      return {
        ...state,
        fetchingTags: true,
        tags: [],
        error: null
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        fetchingTags: false,
        tags: action.payload.tags,
        error: null
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        fetchingTags: false,
        tags: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
