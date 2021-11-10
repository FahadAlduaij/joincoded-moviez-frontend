import React from "react";
import { observer } from "mobx-react";

import singleStore from "../stores/singleStore";

const MovieComments = ({ movieId }) => {
  console.log(movieId);
  const movie = singleStore.movies.find((movie) => movie._id === movieId);
  console.log(typeof movieId, typeof movie._id);

  if (!movie.comments.length >= 1) return <p>Be the first to Comment</p>;

  const commentsList = movie.comments.map((comment) => (
    <div key={comment._id} className="comments-text">
      <div className="d-flex flex-row comment-header">
        <p className="me-4">{comment.username}</p>
        <p>{comment.dateSent}</p>
      </div>
      <div className="p-2 mb-2 mt-3 comment-text">{comment.message}</div>
    </div>
  ));

  return <div className="">{commentsList}</div>;
};

export default observer(MovieComments);
