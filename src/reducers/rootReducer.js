import { combineReducers } from "redux";

import studentReducer from "./student";
import companyReducer from "./company";

export default combineReducers({
  student: studentReducer,
  company: companyReducer
});
