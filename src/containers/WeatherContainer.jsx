import React, { useEffect, useState, } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import ForecastList from '../components/ForecastList';
import SearchForm from '../components/SearchForm';
import Header from '../components/Header';

const WeatherContainer = () => {
    
    const [currentWeather, setCurrentWeather] = useState({});
    const [weatherList, setWeatherList] = useState([]);
    const [loader, setLoaderState] = useState(true);
    const [query, setQuery] = useState('Stockholm');
    
    
    useEffect(() => {
        let key = "7d47546ab568b328cb3068e767c993fe";
        let city = `${query}`
        let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`
        let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${key}`

        const fetchData = async () => {
            const res = await fetch(currentWeatherUrl);
            if(res.cod === "404" || res.cod === "400")
                return(<h3>tset</h3>);
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

        const getData = async () => {
            setLoaderState(true)
            const apiCurrentData = await fetchData()
            const apiForecastData = await fetchDataList()
            setCurrentWeather(apiCurrentData)
            setWeatherList(apiForecastData)
            setLoaderState(false)
        }
        getData();
    },[query]);


    if(loader)
        return(<div style={{ width: "40vw", height: "25vh", paddingTop: "6rem"}}>
            <h3>loading...</h3>
        </div>)

    if(currentWeather.cod === "404" || currentWeather.cod === "400")
            return(<div style={{ width: "40vw", height: "25vh", paddingTop: "6rem"}}>
                    <h1>{currentWeather.cod}</h1>
                    <h3>{currentWeather.message}</h3>
                    <SearchForm callback={setQuery}/>
            </div>)

    return (
        <>
        <div>
            <SearchForm callback={setQuery}/>
            <CurrentWeather currentWeather={currentWeather}/>
            <ForecastList weatherList={weatherList}/>
        </div>
        </>
        
    );
}

export default WeatherContainer