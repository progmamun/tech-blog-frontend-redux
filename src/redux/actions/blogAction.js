import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

export const addBlog = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const loaded = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
