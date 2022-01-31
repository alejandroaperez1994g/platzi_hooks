import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const apiKey = "1e98e1a412d9c97a8c83b14e0896bf62";

  const fetchData = async () => {
    const result = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    setWeather(result.data);
  };

  console.log(weather);

  return (
    <div className="Weather">
      <div className="city">
        <h2>City: </h2>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Type a City"
        />
      </div>
      <button type="button" onClick={() => fetchData()}>
        Get Weather
      </button>

      {weather ? (
        <div className="weatherCard">
          <h3>Overview: {weather?.weather[0].description}</h3>
          <h4>Temperature: {weather?.main.temp} F</h4>
          <h4>Temperature Max: {weather?.main.temp_max} F</h4>
          <h4>Temperature Min: {weather?.main.temp_min} F</h4>
          <h4>Humidity: {weather?.main.humidity} F</h4>
        </div>
      ) : null}
    </div>
  );
};
