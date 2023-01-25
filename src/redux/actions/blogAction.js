import {
  ADD_CONTENT,
  GET_CONTENT,
  REMOVE_CONTENT,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

export const addBlog = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const removeBlog = (id) => {
  return {
    type: REMOVE_CONTENT,
    payload: id,
  };
};

export const removeFromCart = (blog) => {
  return {
    type: REMOVE_FROM_CART,
    payload: blog,
  };
};

export const loaded = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
