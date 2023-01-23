import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

export const rootReducer = combineReducers({ blog: blogReducer });
