import { combineReducers } from "redux";

import studentReducer from "./student";
import companyReducer from "./company";
import userReducer from "./user";
import signupReducer from "./signup";
import studentSettingsReducer from "./StudentSettings";

export default combineReducers({
  student: studentReducer,
  company: companyReducer,
  user: userReducer,
  signupInfo: signupReducer,
  settings: studentSettingsReducer
});
