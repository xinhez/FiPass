import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export function loginUser(userInfo) {
  return dispatch => {
    dispatch(loginUserBegin());
    axios({
      method: "POST",
      url: BASE_URL + "authenticate",
      data: userInfo
    })
      .then(response => {
        console.log("success", response.data);
        dispatch(loginUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      });
  };
}

export const USER_LOGIN_BEGIN = "USER_LOGIN_BEGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const loginUserBegin = () => ({
  type: USER_LOGIN_BEGIN
});

export const loginUserSuccess = userInfo => ({
  type: USER_LOGIN_SUCCESS,
  payload: {
    id: userInfo.id,
    token: userInfo.auth_token,
    role: userInfo.role
  }
});

export const loginUserFailure = error => ({
  type: USER_LOGIN_FAILURE,
  payload: { error }
});
