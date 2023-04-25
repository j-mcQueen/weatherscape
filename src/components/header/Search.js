import { useState } from "react";

export default function Search({...props}) {
    const [entry, setEntry] = useState("");
    const extractForecastData = (response) => {
        return {
            location: response.city.name,
            country: response.city.country,
            current: {
                icon: response.list[0].weather[0].icon,
                temp_c: Math.floor(response.list[0].main.temp - 273.15),
                temp_f: Math.floor((response.list[0].main.temp - 273.15) * 9/5 + 32),
                rain_chance: Math.floor(response.list[0].pop * 100),
            },
            forecast: [
                // date, weather, rain chance, temperature
                {
                    // day + 1
                    date: (new Date(response.list[8].dt_txt).getMonth() + 1) + "/" + (new Date(response.list[8].dt_txt).getDate()),
                    temp_c: Math.floor(response.list[8].main.temp - 273.15),
                    temp_f: Math.floor((response.list[8].main.temp - 273.15) * 9/5 + 32),
                    icon: response.list[8].weather[0].icon,
                    rain_chance: Math.floor(response.list[8].pop * 100),
                },
                {
                    // day + 2
                    date: (new Date(response.list[16].dt_txt).getMonth() + 1) + "/" + (new Date(response.list[16].dt_txt).getDate()),
                    temp_c: Math.floor(response.list[16].main.temp - 273.15),
                    temp_f: Math.floor((response.list[16].main.temp - 273.15) * 9/5 + 32),
                    icon: response.list[16].weather[0].icon,
                    rain_chance: Math.floor(response.list[16].pop * 100),
                },
                {
                    // day + 3
                    date: (new Date(response.list[24].dt_txt).getMonth() + 1) + "/" + (new Date(response.list[24].dt_txt).getDate()),
                    temp_c: Math.floor(response.list[24].main.temp - 273.15),
                    temp_f: Math.floor((response.list[24].main.temp - 273.15) * 9/5 + 32),
                    icon: response.list[24].weather[0].icon,
                    rain_chance: Math.floor(response.list[24].pop * 100),
                },
            ]
        }
    }

    const extractTodayData = (response) => {
        return {
            today: {
                sunset: response.forecast.forecastday[0].astro.sunset,
                moon_phase: response.forecast.forecastday[0].astro.moon_phase,
                daily_chance_of_rain: response.forecast.forecastday[0].day.daily_chance_of_rain,
                avghumidity: response.forecast.forecastday[0].day.avghumidity,
                maxwind_mph: response.forecast.forecastday[0].day.maxwind_mph,
                avgvis_miles: response.forecast.forecastday[0].day.avgvis_miles,
            }
        }
    }

    const fetchWeather = async (entry) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${entry}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
            const response = await fetch(url, {mode: "cors"});
            const result = await response.json();
            const extracted = extractForecastData(result);
            return Promise.resolve(extracted);
        } catch(error) {
            alert(error);
        }
    }

    const fetchTodayData = async (data) => {
        try {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${entry}`;
            const response = await fetch(url, {mode: "cors"});
            const result = await response.json();
            const extracted = extractTodayData(result);
            const merged = {...data, ...extracted};
            return Promise.resolve(merged);   
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form role="search">
            <input 
                type="search"
                name="search"
                id="search"
                onChange={(e) => { setEntry(e.target.value); }}
                aria-label="Search for a location"
                placeholder="Enter a location..."
                required/>
            <button 
                type="submit"
                onClick={(e) => {
                    if (entry !== "") {
                        e.preventDefault();
                        fetchWeather(entry)
                            .then(data => fetchTodayData(data))
                            .then(data => props.setData(data));
                    }
                }}
                className="search-icon"
                aria-label="Submit the search form">
                <svg 
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16">
                        <path 
                            fillRule="evenodd" 
                            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z">
                        </path>
                </svg>
            </button>
        </form>
    )
}