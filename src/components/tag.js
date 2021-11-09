import React from "react";
import { Link } from "react-router-dom";

function Tag({ item }) {
	// Change to Tag
	return (
		<Link to="/">
			<p variant="link">{item} </p>
		</Link>
	);
}

export default Tag;
