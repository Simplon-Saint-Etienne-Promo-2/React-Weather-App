import { useEffect } from "react";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import "./App.css";
import axios from "axios";

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


  


  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Lyon&days=5&aqi=no&alerts=no`)
      .then(function ({ data }) {
        // en cas de réussite de la requête
        console.log(data);

      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      })
  });



  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">
          <Weather  />
        </div>
      </div>
    </div>
  );
}

export default App;
