import React from "react";
import "./App.css";
import axios from "axios";
import { useRef, useState } from "react";
import { TempMax } from "./blocks/TempMax";
import { Humidity } from "./blocks/Humidity";
import { Clouds } from "./blocks/Clouds";

export const Content = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("mukachevo");
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=35eb3d4fe816cd13a92a10c20fb6258b`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(URL).then((response) => {
        setData(response.data);

        console.log(response.data);
      });
      setLocation("");
    }
  };
  let changeLocationKiev = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=35eb3d4fe816cd13a92a10c20fb6258b"
      )
      .then((response) => {
        setData(response.data);
      });
  };
  let changeLocationMukachevo = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=mukachevo&appid=35eb3d4fe816cd13a92a10c20fb6258b"
      )
      .then((response) => {
        setData(response.data);
      });
  };
  let changeLocationUzhgorod = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=uzhhorod&appid=35eb3d4fe816cd13a92a10c20fb6258b"
      )
      .then((response) => {
        setData(response.data);
      });
  };

  let changeLocationBudapest = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=budapest&appid=35eb3d4fe816cd13a92a10c20fb6258b"
      )
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div className>
      <div >
        <input
        className="input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <h1 className="cityName">{data.name}</h1>
      <div className="content-div">
        <hr className="line1"></hr>
        <div className="cities">
          <label className="cityItem" onClick={changeLocationMukachevo}>
            Mukachevo
          </label>
          <label className="cityItem" onClick={changeLocationUzhgorod}>
            Uzhgorod
          </label>
          <label className="cityItem" onClick={changeLocationKiev}>
            Kiev
          </label>
          <label className="cityItem" onClick={changeLocationBudapest}>
            Budapest
          </label>
        </div>
        {data.main ? (
          <h1 className="cityTemp">
            {" "}
            <h1>Temp</h1>
            {(data.main.temp - 273).toFixed(2)}C&deg;
          </h1>
        ) : null}
      </div>
      <TempMax data={data} />
      <Humidity data={data} />
      <Clouds data={data}/>
    </div>
  );
};

export default Content;
