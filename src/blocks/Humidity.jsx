import React from "react";
import "../blocks/Maxtemp.css";

export const Humidity = (props) => {
 
  return (
    <div className="humidityWrap">
      {props.data.main ? (
        <h1 className="humidity">
          <h1>Humidity</h1>
          {props.data.main.humidity}%
        </h1>
      ) : null}
    </div>
  );
};
