import { combineReducers } from "redux";

import applicationReducer from "./application";
import companyReducer from "./company";
import skillReducer from "./skill";
import studentReducer from "./student";
import tagReducer from "./tag";
import userReducer from "./user";

export default combineReducers({
  application: applicationReducer,
  company: companyReducer,
  skill: skillReducer,
  student: studentReducer,
  tag: tagReducer,
  user: userReducer
});
