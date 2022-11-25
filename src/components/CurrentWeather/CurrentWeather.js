import './CurrentWeather.css';
import { useState, useEffect } from 'react';

function CurrentWeather({currentWeather}) {

    const [tempUnit, setTempUnit] = useState(""); // This is for changing temperature units.

    useEffect(() => {

        setTempUnit("celsius");

        const unitClick = document.querySelector('.unit-click');
        unitClick.addEventListener('click', () => setTempUnit(tempUnit === "celsius" ? "farhenheit" : "celsius"));

    }, [tempUnit, currentWeather]);

    return (
        <div className="CurrentWeather">
            <h4 className="CW-title">Current Weather</h4>
            <div className="CurrentWeatherCard">
                <div className="icon-and-term">
                    <img className="currentIcon" src={currentWeather.current_icon} alt={currentWeather.main_weather}/>      
                    <p className="weather-term">{currentWeather.term}</p>
                </div>
                <div className="temperature">
                    <p className="temperature-display">{tempUnit === "celsius" ? currentWeather.celTemp : currentWeather.farhTemp}</p>
                    <p className="temperature-units">
                        <span className={tempUnit !== "celsius" ? "celsius unit-click" : "celsius"}>°C</span>
                        |
                        <span className={tempUnit !== "farhenheit" ? "farhenheit unit-click" : "farhenheit"}>°F</span>
                    </p>
                </div>
                <div className="weather-info">
                    <p>Humidity: {currentWeather.humidity}</p>
                    <p>Pressure: {currentWeather.pressure}</p>
                    <p>Wind: {currentWeather.wind}</p>
                    <p>Sunrise: {currentWeather.sunrise}</p>
                    <p>Sunset: {currentWeather.sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;