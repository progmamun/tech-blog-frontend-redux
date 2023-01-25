import { addBlog, loaded, removeBlog } from "../actions/blogAction";

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

export const updateBlogThunk = (id, blog) => {
  return async (dispatch) => {
    const res = await fetch(`${URL}/blog/${id}`, {
      method: "PATCH",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res) {
      dispatch(getBlogsThunk());
    }
  };
};

export const removeBlogThunk = (id) => {
  return async (dispatch) => {
    const res = await fetch(`${URL}/blog/${id}`, {
      method: "DELETE",
    });
    dispatch(getBlogsThunk());
    if (res) {
      dispatch(removeBlog(id));
    }
  };
};
