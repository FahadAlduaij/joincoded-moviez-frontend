import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";

function Tags({ item, slug, baseUrl }) {
	return (
		<div className="d-inline-flex flex-fill flex-wrap p-2 ">
			<Link to={`/${baseUrl}/${slug}`}>
				<button className="genres-and-celebrities-tags">{item} </button>
			</Link>
		</div>
	);
}

export default observer(Tags);
