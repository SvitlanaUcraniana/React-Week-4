import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setMessage(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img src={iconUrl} alt="Weather Icon" />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
      axios.get(url).then(displayWeather);
    } else {
      return form;
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  return (
    <div>
      {form}
      {message}
      <p><a href="https://github.com/SvitlanaUcraniana/React-Week-4">Open-source code</a>, by Svitlana Ivanishyna</p>
    </div>
  );
}
