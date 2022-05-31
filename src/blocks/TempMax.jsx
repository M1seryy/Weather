import React from "react";
import "../blocks/Maxtemp.css";

export const TempMax = (props) => {
 
  return (
    <div className="maxTempWrap">
      {props.data.main ? (
        <h1 className="maxText">
          <h1>Max temp</h1>
          {(props.data.main.temp_max - 273).toFixed(2)}C&deg;
        </h1>
      ) : null}
    </div>
  );
};
