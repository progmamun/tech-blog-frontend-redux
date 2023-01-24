import { FILTER_BY_TAG, FILTER_BY_UPLOAD } from "../actionTypes/actionTypes";

export const filterByTag = (tag) => {
  return async (dispatch, getState) => {
    dispatch({ type: FILTER_BY_TAG, payload: tag });
  };
};

export const filterByUpload = (time) => {
  return async (dispatch, getState) => {
    dispatch({ type: FILTER_BY_UPLOAD, payload: time });
  };
};
