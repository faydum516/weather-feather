import './index.css';
import './WeatherApp.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import * as Weather from 'react-icons/wi';
import weatherIcons from './weatherIcons/weatherIcons.js';
import weatherTerms from './weatherIcons/weatherTerms.js';
import Header from './components/Header/Header.js';
import SearchLocation from './components/SearchLocation/SearchLocation.js';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.js';
// import DailyForecast from './components/DailyForecast/DailyForecast.js';
import ThreeHourForecast from './components/ThreeHourForecast/ThreeHourForecast.js';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  /*const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);*/
  // const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    // const dailyArr = [];
    // const threeHourArr = [];
    let latitude, longitude;
    const objIcon = "icon";
    const objAlt = "alt";
    const time = "time";
    const celTemp = "celTemp";
    const farhTemp = "farhTemp";
    const humidity = "humidity";
    const pressure = "pressure";
    const wind = "wind";
    const sunset = "sunset";
    const sunrise = "sunrise";
    const currentIcon = "current_icon";
    const term = "term";
    const mainWeather = "main_weather";

    if (location !== '') {
      /*axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=8&key=3dedb3daa6084a5d97f316adc95e0f6d`)
        .then((response) => {
          // console.log(response.data);
          for (let i = 0; i < response.data.data.length; i++) {
            let obj = {};
            let description = response.data.data[i].weather.description.toLowerCase();
            let icon = response.data.data[i].weather.icon;
            // console.log(description);
            // console.log(icon);
            obj[objIcon] = weatherIcons[description][icon];
            obj[objAlt] = description;
            dailyArr.push(obj);
          }
          setDailyForecast([...dailyArr]);
        })
        .catch((error) => {
          console.error(error);
        });*/

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=8&appid=6e1a465582c0f73603c073b90273f31f`)
        .then((response) => {
          console.log(response.data);

          const threeHourArr = response.data.list.map((item) => {
              let obj = {};
              let dateTime = item.dt_txt;
              let description = item.weather[0].description.toLowerCase();
              let icon = item.weather[0].icon;
              let hour = Number(dateTime.substring(dateTime.length - 8).substring(0, 2));
              obj[time] = hour > 12 ? `${hour - 12} PM` :
                  hour === 12 ? `${hour} PM` :
                  hour > 0 ? `${hour} AM` :
                  "12 AM";
              obj[objIcon] = weatherIcons[description][icon];
              obj[objAlt] = description;
              return obj;
          });

          latitude = response.data.city.coord.lat;
          longitude = response.data.city.coord.lon;

          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6e1a465582c0f73603c073b90273f31f`)
            .then((resp) => {
              let currentWeatherObj = {};
              let description = resp.data.weather[0].description.toLowerCase();
              let icon = resp.data.weather[0].icon;
              let celsiusTemp = `${Math.round(resp.data.main.temp - 273.15)}°C`; // The resp.data.main.temp value is in kelvins.
              let fahrenheitTemp = `${Math.round(1.8 * (resp.data.main.temp - 273) + 32)}°F`;
              let windSpeed = `${Math.round(resp.data.wind.speed * 3600 / 1000)}km/h`;
              let sunSet = new Date(resp.data.sys.sunset * 1000).toLocaleTimeString();
              let sunRise = new Date(resp.data.sys.sunrise * 1000).toLocaleTimeString();
              currentWeatherObj[currentIcon] = weatherIcons[description][icon];
              currentWeatherObj[term] = weatherTerms[description][icon];
              currentWeatherObj[mainWeather] = resp.data.weather[0].main;
              currentWeatherObj[celTemp] = celsiusTemp;
              currentWeatherObj[farhTemp] = fahrenheitTemp;
              currentWeatherObj[humidity] = `${resp.data.main.humidity}%`;
              currentWeatherObj[pressure] = `${resp.data.main.pressure}hPa`;
              currentWeatherObj[wind] = windSpeed;
              currentWeatherObj[sunset] = sunSet;
              currentWeatherObj[sunrise] = sunRise;
              console.log(currentWeatherObj);
              setCurrentWeather(currentWeatherObj);
            })
            .catch((err) => {
              console.error(err);
            });
          
            setHourlyForecast([...threeHourArr]);
        })
        .catch((err) => {
          console.error(err);
        });      
    }
  }, [location]);

  function searchLocation(location) {
    setLocation(location);
  }

  return (
    <main className="WeatherApp">
      <Header />
      <SearchLocation handleSubmit={searchLocation} />
      {location && 
        <section className="weather-section">
          <h2 className="location-title">{location.replace(/,/g, ", ")}</h2>
          <CurrentWeather currentWeather={currentWeather}/>
          <ThreeHourForecast hourArr={hourlyForecast} />
          {/* <DailyForecast dailyArr={dailyForecast} /> */}
        </section>
      }
    </main>
  );
}

export default WeatherApp;