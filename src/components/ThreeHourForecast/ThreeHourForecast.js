import './ThreeHourForecast.css';

function ThreeHourForecast({hourArr}) {
    return (
          <div className="ThreeHourForecast">
            <h4 className="ForecastTitle">3-Hour Forecast</h4>
            <div className="ForecastCards">
              {hourArr.map((forecast, index) => {
                return (
                  <div className="ForecastCard" key={index}>
                    <p className="ForecastTime">{forecast.time}</p>
                    <img className="WeatherIcon" src={forecast.icon} alt={forecast.alt} />
                    <p className="ForecastTemp">{forecast.temp}</p>
                  </div>
                );
              })}
            </div>
          </div>
    );
}

export default ThreeHourForecast;