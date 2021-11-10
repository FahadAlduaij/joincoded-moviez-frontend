import React from "react";
import { Link } from "react-router-dom";

function Tags({ item }) {
  return (
    <div>
      <Link to="/">
        <p>{item} </p>
      </Link>
    </div>
  );
}

export default Tags;
