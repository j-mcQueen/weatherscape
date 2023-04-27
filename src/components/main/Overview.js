import meteocons from "./exports/meteocons";

export default function Overview({...props}) {
    return (
        <div className="overview weather-container">
            <div className="weather-main">
                <div className="location">
                    <h1>{props.weather.location}</h1>
                </div>

                <div className="date">
                    <p>
                        {props.weather.current.date}
                    </p>
                </div>

                <div className="current-temp">
                    {
                        props.temp === "C"
                        ?
                        Math.floor(props.weather.current.temp_c)
                        :
                        Math.floor(props.weather.current.temp_f)
                    }
                </div>

                <div className="weather-outlook">
                    <p>{props.weather.current.condition_text}</p>
                </div>
            </div>

            <div className="weather-props">
                <div className="prop">
                    <div className="prop-sub">
                        <h3>SUNSET</h3>
                    </div>

                    <div className="prop-val">
                        <p>{props.weather.current.sunset}</p>
                    </div>

                    <div className="prop-icon">
                        <img src={meteocons.sunset} alt="An animated graphic of a sun behind a horizon"/>
                    </div>
                </div>

                <div className="prop">
                    <div className="prop-sub">
                        <h3>RAIN CHANCE</h3>
                    </div>

                    <div className="prop-val">
                        <p>{props.weather.current.rain_chance}%</p>
                    </div>

                    <div className="prop-icon">
                        <img src={meteocons.raindrops} alt="An animated graphic of two raindrops"/>
                    </div>
                </div>
            </div>
        </div>
    )
}