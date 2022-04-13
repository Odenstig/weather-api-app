import React from 'react'
import dayjs from 'dayjs'
import styles from './ForecastList.module.css'

const ForecastList = ({weatherList}) => {
  let now = dayjs().format();
  let date = now.slice([0],[10])
  console.log(date)

  return (
    <div className={styles.weatherBox}>
      {weatherList.list.filter(weather => weather.dt_txt.includes('12:00:00')
        && !weather.dt_txt.includes(date))
        .map((filteredWeather, index) => (
        <div className={styles.weatherItem} key={index}>
            <img className={styles.weatherImage} src={`http://openweathermap.org/img/wn/${filteredWeather.weather[0].icon}@4x.png`} alt="icon"/>
            <h3>{dayjs(filteredWeather.dt_txt).format('dddd')}</h3>
            <h3>{Math.round(filteredWeather.main.temp)} °C</h3>
        </div>
      ))}
    </div>
  )
}

export default ForecastList