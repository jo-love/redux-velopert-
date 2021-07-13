import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: true,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default commentsReducer;
