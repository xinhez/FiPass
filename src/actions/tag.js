import axios from "axios";
import { BASE_URL } from "./config";

export function fetchTags(Authorization) {
  return dispatch => {
    dispatch(fetchTagsBegin());
    axios({
      method: "GET",
      url: BASE_URL + "tags",
      headers: {
        Authorization
      }
    })
      .then(response => {
        dispatch(fetchTagsSuccess(response.data));
      })
      .catch(error => dispatch(fetchTagsFailure(error)));
  };
}

export const FETCH_TAGS_BEGIN = "FETCH_TAGS_BEGIN";
export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_TAGS_FAILURE = "FETCH_TAGS_FAILURE";

const fetchTagsBegin = () => ({
  type: FETCH_TAGS_BEGIN
});

const fetchTagsSuccess = tags => ({
  type: FETCH_TAGS_SUCCESS,
  payload: { tags }
});

const fetchTagsFailure = error => ({
  type: FETCH_TAGS_FAILURE,
  payload: { error }
});
