import React from "react";
import { Link } from "react-router-dom";

function Tag({ genre }) {
	return (
		<div>
			<Link to="/">
				<p variant="link">{genre.genreName} </p>
			</Link>
		</div>
	);
}

export default Tag;
