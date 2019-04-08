import { combineReducers } from "redux";

import studentReducer from "./student";
import companyReducer from "./company";
import userReducer from "./user";

export default combineReducers({
  student: studentReducer,
  company: companyReducer,
  user: userReducer
});
