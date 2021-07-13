import axios from "axios";

import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

const fetchCommentSuccess = (data) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: data,
  };
};

const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

//thunk사용했기 때문에 dispatch를 인자로 넘겨받은 함수를 사용한다.
export const fetchComments = () => {
    return (dispatch) => {
      dispatch(fetchCommentRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => dispatch(fetchCommentSuccess(res.data)))
        .catch((error) => fetchCommentFailure(error));
    };
  };