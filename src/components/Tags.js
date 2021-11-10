import React from "react";
import { Link } from "react-router-dom";

function Tags({ item, slug, baseUrl }) {
  return (
    <div>
      <Link to={`/${baseUrl}/${slug}`}>
        <p variant="link">{item} </p>
      </Link>
    </div>
  );
}

export default Tags;
