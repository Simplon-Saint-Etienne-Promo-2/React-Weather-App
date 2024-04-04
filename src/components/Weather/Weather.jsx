import React from "react";
import Days from "../Days/Days";
import './Weather.css';
import sun from '../../assets/icons/sun.svg';

function Weather() {
  return (
    <div className="weather card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Lyon</span>
        <p>
          <img src={sun} />
        </p>
        <span className="temperature">15°</span>
        <div className="wind">Vent 1km/h (360°)</div>
      </div>
      <Days />
    </div>
  );
}

export default Weather;
