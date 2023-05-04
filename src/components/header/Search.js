import { useState } from "react";

export default function Search({...props}) {
    const [entry, setEntry] = useState("");

    const extractCurrentData = (response) => {
        return {
            location: response.location.name.toUpperCase(),
            current: {
                temp_c: response.current.temp_c,
                temp_f: response.current.temp_f,
                condition_text: response.current.condition.text.toUpperCase(),
                humidity: response.current.humidity,
                vis_miles: response.current.vis_miles,
                vis_km: response.current.vis_km,
                wind_mph: response.current.wind_mph,
                wind_kph: response.current.wind_kph,
                sunset: response.forecast.forecastday[0].astro.sunset,
                rain_chance: response.forecast.forecastday[0].day.daily_chance_of_rain,
                moon_phase: response.forecast.forecastday[0].astro.moon_phase.toUpperCase(),
            },
            forecast: [
                {
                    temp_c: response.forecast.forecastday[1].day.avgtemp_c,
                    temp_f: response.forecast.forecastday[1].day.avgtemp_f,
                    condition: response.forecast.forecastday[1].day.condition.text.toUpperCase(),
                    vis_miles: response.forecast.forecastday[1].day.avgvis_miles,
                    vis_km: response.forecast.forecastday[1].day.avgvis_km,
                    humidity: response.forecast.forecastday[1].day.avghumidity,
                    wind_mph: response.forecast.forecastday[1].day.maxwind_mph,
                    wind_kph: response.forecast.forecastday[1].day.maxwind_kph,
                    sunset: response.forecast.forecastday[1].astro.sunset,
                    rain_chance: response.forecast.forecastday[1].day.daily_chance_of_rain,
                    moon_phase: response.forecast.forecastday[1].astro.moon_phase.toUpperCase()
                },
                {
                    date: (new Date(response.forecast.forecastday[2].date).getMonth() + 1) + "/" + (new Date(response.forecast.forecastday[2].date).getUTCDate()),
                    temp_c: response.forecast.forecastday[2].day.avgtemp_c,
                    temp_f: response.forecast.forecastday[2].day.avgtemp_f,
                    condition: response.forecast.forecastday[2].day.condition.text.toUpperCase(),
                    vis_miles: response.forecast.forecastday[2].day.avgvis_miles,
                    vis_km: response.forecast.forecastday[1].day.avgvis_km,
                    humidity: response.forecast.forecastday[2].day.avghumidity,
                    wind_mph: response.forecast.forecastday[2].day.maxwind_mph,
                    wind_kph: response.forecast.forecastday[2].day.maxwind_kph,
                    sunset: response.forecast.forecastday[2].astro.sunset,
                    rain_chance: response.forecast.forecastday[2].day.daily_chance_of_rain,
                    moon_phase: response.forecast.forecastday[2].astro.moon_phase.toUpperCase()
                },
            ]
        }
    }

    const fetchCurrentWeather = async (entry) => {
        try {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${entry}&days=3`;
            const response = await fetch(url, {mode: "cors"});
            const result = await response.json();
            const extracted = extractCurrentData(result);
            return Promise.resolve(extracted);
        } catch(error) {
            console.log(error);
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
                        fetchCurrentWeather(entry)
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