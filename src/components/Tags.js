import React from "react";
import { Link } from "react-router-dom";

function Tags({ item, slug }) {
  return (
    <div>
      <Link to={`/genres/${slug}`}>
        <p>{item} </p>
      </Link>
    </div>
  );
}

export default Tags;
