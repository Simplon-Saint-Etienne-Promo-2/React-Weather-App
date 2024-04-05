import React from "react";
import Days from "../Days/Days";
import './Weather.css';
import sun from '../../assets/icons/sun.svg';

function Weather({ icon, tempC, windSpeed, windDegree}) {



  return (
    <div className="weather card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Lyon</span>
        <p>
          <img src={icon} />
        </p>
        <span className="temperature">{tempC}°</span>
        <div className="wind">Vent {windSpeed}km/h ({windDegree}°)</div>
      </div>
      <Days />
    </div>
  );
}

export default Weather;
