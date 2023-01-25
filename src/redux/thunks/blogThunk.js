import { addBlog, loaded } from "../actions/blogAction";

const URL = "http://127.0.0.1:5000";

export const getBlogsThunk = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${URL}/blogs`);
    const { data } = await res.json();
    dispatch(loaded(data));
  };
};

export const addBlogThunk = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${URL}/blog`, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      dispatch(addBlog(data));
    }
  };
};
