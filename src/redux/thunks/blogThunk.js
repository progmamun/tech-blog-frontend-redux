import { loaded } from "../actions/blogAction";

const URL = "http://127.0.0.1:5000";

export const getBlogsThunk = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${URL}/blogs`);
    const { data } = await res.json();
    dispatch(loaded(data));
  };
};
