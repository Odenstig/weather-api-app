import dayjs from 'dayjs'
import React from 'react'
import styles from './CurrentWeather.module.css'
import utc from 'dayjs/plugin/utc';

const CurrentWeather = ({currentWeather}) => {
    let weatherIcon = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`
    
    dayjs.extend(utc);
    let now = dayjs.utc((currentWeather.dt + currentWeather.timezone) * 1000).format('HH:mm');

    return (
        <div className={styles.box}>
            <div className={styles.main}>
                {/* City name */}
                <h1>{currentWeather.name} - {currentWeather.sys.country}</h1>
            
                {/* Temp */}
                <img src={weatherIcon} alt="icon" />
                <h1>{Math.round(currentWeather.main.temp)}°C</h1>
                <h3>{currentWeather.weather[0].main}</h3>
                
                
            </div>
            <div className={styles.desc}>
                <h2>{now}</h2>
                <h3>Feels like: {Math.round(currentWeather.main.feels_like)}°C</h3>
                <h3>Min Temperature: {Math.round(currentWeather.main.temp_min)}°C</h3>
                <h3>Max Temperature: {Math.round(currentWeather.main.temp_max)}°C</h3>
                <h3>Humidity: {currentWeather.main.humidity}%</h3>
                <h3>Wind: {Math.round(currentWeather.wind.speed)} m/s</h3>
            </div>
        </div>
    )
}

export default CurrentWeather