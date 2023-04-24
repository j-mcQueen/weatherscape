import phases from "./exports/phases";
import meteocons from "./exports/meteocons";

import Info from "./Info";

export default function Details({...props}) {
    // each info component gets passed a title, icon and description in props

    const moonPhases = {
        "new moon": phases.newMoon,
        "waxing crescent": phases.waxingC,
        "first quarter": phases.firstQ,
        "waxing gibbous": phases.waxingG,
        "full moon": phases.fullMoon,
        "waning gibbous": phases.waningG,
        "last quarter": phases.lastQ,
        "waning crescent": phases.waningC,
    }

    const supplyIcon = (phase) => {
        for (let key in moonPhases) {
            if (key === phase) {
                return moonPhases[key];
            }
        }
    }
    
    return (
        <div className="details">
            <Info
                title="wind speed"
                icon={meteocons.wind}
                alt="An animated graphic of blowing wind"
                desc={props.weather.forecast.maxwind_mph + " mph"}
            />
            <Info
                title="moon phase"
                icon={ supplyIcon(props.weather.forecast.moon_phase.toLowerCase()) }
                alt={`A graphic of the moon in its ${props.weather.forecast.moon_phase.toLowerCase()} phase`}
                desc={props.weather.forecast.moon_phase.toLowerCase()}
            />
            <Info
                title="visibility"
                icon={meteocons.mist}
                alt="An animated graphic of mist"
                desc={props.weather.forecast.avgvis_miles + " miles"}
            />
            <Info
                title="humidity"
                icon={meteocons.humidity}
                alt="A graphic of a raindrop with a percentage sign in the middle"
                desc={props.weather.forecast.avghumidity + "%"}
            />
        </div>
    )
}