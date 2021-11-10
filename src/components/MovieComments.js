import React from "react";
import { observer } from "mobx-react";

import MovieCommentCard from "./MovieCommentCard";

import singleStore from "../stores/singleStore";

const MovieComments = () => {
  const commentsList = singleStore.comments.map((comment) => (
    <MovieCommentCard
      key={comment._id}
      username={comment.username}
      dateSent={comment.dateSent}
      message={comment.message}
    />
  ));

  return <div className="">{commentsList}</div>;
};

export default observer(MovieComments);
