// import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import './DailyForecast.css';

function DailyForecast({dailyArr}) {

    const forecastDays = Array(8);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date();
    let dayCount = day.getDay(); // The getDay() method returns the day of the week (from 0 to 6).
    
    for (let i = 0; i < forecastDays.length; i++) {
        if (dayCount > 6) { // The maximum index number to return the day of the week is 6.
            dayCount = 0;
        }
        forecastDays[i] = weekDays[dayCount];
        dayCount++;
    }

    /*axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=6e1a465582c0f73603c073b90273f31f`)
        .then((response) => {
            for (let i = 0; i < response.data.daily.length; i++) {
                let obj = {};
                // obj[icon] = `http://openweathermap.org/img/wn/${response.data.daily[i].weather[0].icon}@2x.png`;
                let iconKey = response.data.daily[i].weather[0].icon;
                obj[icon] = icons[iconKey];
                obj[alt] = response.data.daily[i].weather[0].icon;
                dailyArr[i] = obj;
            }
        })
        .catch((error) => {
            console.error(error);
        });*/

    return (
        <>
        {/*<div className="WeatherForecast">
            <FiArrowLeft onClick={arrowLeft} />
            {forecasts.map((forecast, index) => {
                return (index === currentIndex && 
                    <div className="ForecastCard" key={`forecast${index + 1}`}>
                        <img className="WeatherIcon" src={forecast.icon} alt={forecast.alt} />
                        <p>{forecast.dateTime}</p>
                    </div>
                )
            })}
            <FiArrowRight onClick={arrowRight} />
        </div>*/}
            <h4>Daily Forecast</h4>
            <div className="DailyForecast">
                              {/* <div className="ForecastCard" key={`forecast${index + 1}`}> */}
                        {/* <img className="WeatherIcon" src={forecast.icon} alt={forecast.alt} /> */}
                        {/* <p>{forecast.dateTime}</p> */}
                {dailyArr.map((forecast, index) => {
                    return (
                        <div className="ForecastCard" key={`forecast${index + 1}`}>
                            <img className="WeatherIcon" src={forecast.icon} alt={forecast.alt} />
                            <p className="Day">{forecastDays[index]}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DailyForecast;