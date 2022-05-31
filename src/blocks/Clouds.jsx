import React from "react";
import "../blocks/Maxtemp.css";

export const Clouds = (props) => {
  return (
    <div className="descriptionWrap">
      {props.data.main ? (
        <h1 className="description">
          <h1>Description:</h1>
          {props.data.weather[0].description}
        </h1>
      ) : null}
    </div>
  );
};
