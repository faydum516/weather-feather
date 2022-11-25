import clearSkyDay from './01d@2x.png';
import clearSkyNight from './01n@2x.png';
import partlyCloudyDay from './02d@2x.png';
import partlyCloudyNight from './02n@2x.png';
import scatteredCloudyDay from './03d@2x.png';
import scatteredCloudyNight from './03n@2x.png';
import brokenCloudyDay from './04d@2x.png';
import brokenCloudyNight from './04n@2x.png';
import showerRainyDay from './09d@2x.png';
import showerRainyNight from './09n@2x.png';
import rainyDay from './10d@2x.png';
import rainyNight from './10n@2x.png';
import thunderStormyDay from './11d@2x.png';
import thunderStormyNight from './11n@2x.png';
import snowyDay from './13d@2x.png';
import snowyNight from './13n@2x.png';
import mistyDay from './50d@2x.png';
import mistyNight from './50n@2x.png';

const weatherIcons = {
    "thunderstorm with light rain": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "thunderstorm with rain": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "thunderstorm with heavy rain": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "light thunderstorm": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "thunderstorm": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "heavy thunderstorm": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "ragged thunderstorm": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "thunderstorm with light drizzle": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "thunderstorm with drizzle": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "thunderstorm with heavy drizzle": {
        "11d": thunderStormyDay,
        "11n": thunderStormyNight
    },
    "light intensity drizzle": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "drizzle": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "heavy intensity drizzle": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "light intensity drizzle rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "drizzle rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "heavy intensity drizzle rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "shower rain and drizzle": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "heavy shower rain and drizzle": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "shower drizzle": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "light rain": {
        "10d": rainyDay,
        "10n": rainyNight
    },
    "moderate rain": {
        "10d": rainyDay,
        "10n": rainyNight
    },
    "heavy intensity rain": {
        "10d": rainyDay,
        "10n": rainyNight
    },
    "very heavy rain": {
        "10d": rainyDay,
        "10n": rainyNight
    },
    "extreme rain": {
        "10d": rainyDay,
        "10n": rainyNight
    },
    "freezing rain": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "light intensity shower rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "shower rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "heavy intensity shower rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "ragged shower rain": {
        "09d": showerRainyDay,
        "09n": showerRainyNight
    },
    "light snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "heavy snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "light rain and snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "rain and snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "sleet": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "light shower sleet": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "shower sleet": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "light shower snow": {
        "13d": snowyDay,
        "13n": snowyNight
    }, 
    "shower snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "heavy shower snow": {
        "13d": snowyDay,
        "13n": snowyNight
    },
    "mist": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "smoke": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "haze": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "sand/ dust whirls": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "sand": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "dust": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "fog": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "volcanic ash": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "squalls": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "tornado": {
        "50d": mistyDay,
        "50n": mistyNight
    },
    "clear sky": {
        "01d": clearSkyDay, 
        "01n": clearSkyNight, 
    },
    "few clouds": {
        "02d": partlyCloudyDay,
        "02n": partlyCloudyNight
    },
    "scattered clouds": {
        "03d": scatteredCloudyDay,
        "03n": scatteredCloudyNight
    },
    "broken clouds": {
        "04d": brokenCloudyDay,
        "04n": brokenCloudyNight
    },
    "overcast clouds": {
        "04d": brokenCloudyDay,
        "04n": brokenCloudyNight
    }
};

export default weatherIcons;