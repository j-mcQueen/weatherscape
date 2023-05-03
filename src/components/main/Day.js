import Prop from "./Prop";
import meteocons from "./exports/meteocons";

export default function Day({...props}) {
    return (
        <>
            <div className="weather-main">
                <div className="location">
                    <h1>{props.location}</h1>
                </div>

                <div className="date">
                    <p>
                        {props.date}
                    </p>
                </div>

                <div className="current-temp">
                    {
                        props.unit === "metric"
                        ?
                        Math.floor(props.temp_c)
                        :
                        Math.floor(props.temp_f)
                    }
                    °
                </div>

                <div className="weather-outlook">
                    <p>{props.condition}</p>
                </div>
            </div>

            <div className="weather-props">
                <Prop
                    sub="SUNSET"
                    val={props.sunset}
                    icon={meteocons.sunset}
                    alt="An animated graphic of a sun behind a horizon"
                />

                <Prop
                    sub="DAILY RAIN CHANCE"
                    val={props.rain_chance + "%"}
                    icon={meteocons.raindrops}
                    alt="An animated graphic of two raindrops"                
                />
            </div>
        </>
    )
}