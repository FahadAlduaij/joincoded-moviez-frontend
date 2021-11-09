import React from "react";
import { components } from "react-select";

const GenreOptionsMovieCreate = (props) => {
  // REVIEW: Destructure the props
  return (
    // REVIEW: Do we need the div?
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default GenreOptionsMovieCreate;
