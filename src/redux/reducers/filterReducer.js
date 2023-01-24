import { FILTER_BY_TAG, FILTER_BY_UPLOAD } from "../actionTypes/actionTypes";

const initialState = {
  tags: "",
  updateTime: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TAG:
      const included = state.tags.includes(action.payload);
      if (included) {
        return {
          ...state,
          tags: "",
        };
      }
      return {
        ...state,
        tags: action.payload,
      };
    case FILTER_BY_UPLOAD:
      return {
        ...state,
        updateTime: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
