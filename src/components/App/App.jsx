import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import "./App.css";
import axios from "axios";

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  // const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Lyon&days=5&aqi=no&alerts=no`)
      .then(function ({ data }) {
        // en cas de réussite de la requête
        // setIsDataLoaded(true);
        setWeatherData(data);

      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
        // setIsDataLoaded(true);
      })
  }, []);

  // function handleClickDay(event){
  //   console.log(event.target.id);
  // }

  if (weatherData !== null) {
    console.log(weatherData.forecast.forecastday[0]);
  }
  
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">
          { weatherData !== null ? 
          <Weather
            icon={weatherData.forecast.forecastday[0].day.condition.icon}
            tempC={weatherData.forecast.forecastday[0].day.avgtemp_c}
            windSpeed={weatherData.forecast.forecastday[0].day.maxwind_kph}
            windDegree={weatherData.forecast.forecastday[0].hour[0].wind_degree}

          />  : 
          <p>Chargement...</p> }
        </div>
      </div>
    </div>
  );
}

export default App;
