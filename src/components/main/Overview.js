import Prop from "./Prop";
import meteocons from "./exports/meteocons";

export default function Overview({...props}) {
    return (
        <div className="overview">
            <div className="weather-container">
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
                    <Prop
                        sub="SUNSET"
                        val={props.weather.current.sunset}
                        icon={meteocons.sunset}
                        alt="An animated graphic of a sun behind a horizon"
                    />

                    <Prop
                        sub="DAILY RAIN CHANCE"
                        val={props.weather.current.rain_chance + "%"}
                        icon={meteocons.raindrops}
                        alt="An animated graphic of two raindrops"                
                    />
                </div>
            </div>
        </div>
    )
}