import React from "react";
import { Link } from "react-router-dom";

// REVIEW: File name must be capital. It's a component :)

function Tag({ item }) {
  return (
    //  REVIEW: Do you need the div?
    <div>
      <Link to="/">
        <p variant="link">{item} </p>
      </Link>
    </div>
  );
}

export default Tag;
