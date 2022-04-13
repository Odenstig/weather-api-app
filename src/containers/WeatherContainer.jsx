import React, { useEffect, useState, } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import ForecastList from '../components/ForecastList';

const WeatherContainer = () => {
    
    const [currentWeather, setCurrentWeather] = useState({});
    const [weatherList, setWeatherList] = useState([]);
    const [loader, setLoaderState] = useState(true);
    

    let key = "7d47546ab568b328cb3068e767c993fe";
    let city = "stockholm";
    let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${key}`

    useEffect(() => {
        const getData = async () => {
            const apiCurrentData = await fetchData()
            const apiForecastData = await fetchDataList()
            setCurrentWeather(apiCurrentData)
            setWeatherList(apiForecastData)
            setLoaderState(false)

        }
        getData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(currentWeatherUrl);
        const data = await res.json();

        console.log(data);
        return data;
    };

    const fetchDataList = async () => {
        const res = await fetch(forecastUrl);
        const data = await res.json();

        console.log(data);
        return data;
    };

    if(loader === true)
        return(<div>
            <h3>loading...</h3>
        </div>)

    return (
        <div>
            <CurrentWeather currentWeather={currentWeather}/>
            <ForecastList weatherList={weatherList}/>
        </div>
    );
}

export default WeatherContainer