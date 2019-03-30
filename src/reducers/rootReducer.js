import { combineReducers } from "redux";

import studentReducer from "./student";
import companyReducer from "./company";
import signupReducer from "./signup";

export default combineReducers({
  student: studentReducer,
  company: companyReducer,
  signupInfo: signupReducer
});
