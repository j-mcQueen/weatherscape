import meteocons from "./exports/meteocons";

export default function Overview({...props}) {
    return (
        <div className="overview weather-container">
            <div className="location">
                <h1>{props.weather.location.toLowerCase()}</h1>
            </div>

            <div className="current-temp">
                {
                    props.temp === "C"
                    ?
                    Math.floor(props.weather.current.temp_c)
                    :
                    Math.floor(props.weather.current.temp_f)
                }

                <span>
                    {/* will change depending on weather condition value inside weather api data */}
                    <img src={meteocons.sun} alt="Two raindrops" width="50px"/>
                </span>
            </div>

            <div className="rain-chance">
                <span>
                    <img src={meteocons.raindrops} alt="An animated graphic of two raindrops" width="50px"/>
                </span>
                chance of rain: {props.weather.forecast.rain_chance}%
            </div>

            <div className="sunset">
                <span>
                    <img src={meteocons.sunset} alt="An animated graphic of the sun behind a horizon" width="50px"/>
                </span>
                sunset: {props.weather.forecast.sunset}
            </div>
        </div>
    )
}