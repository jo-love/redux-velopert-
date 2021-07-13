import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "./actions";

function Comments({ fetchComments, loading, comments }) {
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);
  
  const CommentsItems = loading ? (
    <div>is loading...</div>
  ) : (
    comments.map((comment) => <div key={comment.id}>{comment.name}</div>)
  );
  return (
    <div>
      <div>{CommentsItems}</div>
    </div>
  );
}

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.comments,
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
