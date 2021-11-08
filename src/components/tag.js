import React from "react";
import { Link } from "react-router-dom";

function Tag({ item }) {

	return (
		<div>
			<Link to="/">
				<p variant="link">{item} </p>
			</Link>
		</div>
	);
}

export default Tag;
