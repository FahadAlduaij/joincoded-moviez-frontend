import React from "react";
import { observer } from "mobx-react";
import Moment from "react-moment";

// Stores
import movieStore from "../stores/movieStore";
// import singleStore from "../stores/singleStore";

const MovieComments = ({ movieId }) => {
	const movie = movieStore.movies.find((movie) => movie._id === movieId);

	if (!movie.comments.length >= 1) return <h4>Be The First to Comment</h4>;

	const commentsList = movie.comments.map((comment) => (
		<div key={comment._id} className="comments-text">
			<div className="d-flex flex-row comment-header">
				<p className="me-4">{comment.username}</p>
				<p>
					<Moment format="YYYY/MM/DD HH:mm" date={new Date(comment.dateSent)} />
				</p>
			</div>
			<div className="p-2 mb-2 mt-3 comment-text">{comment.message}</div>
		</div>
	));

	return <div className="">{commentsList}</div>;
};

export default observer(MovieComments);
