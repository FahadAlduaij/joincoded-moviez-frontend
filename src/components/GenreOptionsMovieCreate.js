import React from "react";
import { components } from "react-select";

const GenreOptionsMovieCreate = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
};
  
export default GenreOptionsMovieCreate;