import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  GET_CONTENT,
  REMOVE_CONTENT,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

const initialState = {
  history: [],
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  const selectedBlog = state.history.find(
    (blog) => blog._id === action.payload._id
  );

  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case REMOVE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case ADD_TO_HISTORY:
      if (selectedBlog) {
        return { ...state };
      }
      return {
        ...state,
        history: [...state.history, { ...action.payload }],
      };
    case REMOVE_FROM_CART:
      if (selectedBlog.quantity > 1) {
        const newHistory = state.history.filter(
          (blog) => blog._id !== selectedBlog._id
        );
        selectedBlog.quantity = selectedBlog.quantity - 1;

        return {
          ...state,
          history: [...newHistory, selectedBlog],
        };
      }
      return {
        ...state,
        history: state.history.filter(
          (blog) => blog._id !== action.payload._id
        ),
      };
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
