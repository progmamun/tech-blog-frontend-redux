import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";

export const rootReducer = combineReducers({
  blog: blogReducer,
  filter: filterReducer,
});
