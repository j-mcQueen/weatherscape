import phases from "./exports/phases";
import meteocons from "./exports/meteocons";

import Info from "./Info";

export default function Details({...props}) {
    // each info component gets passed a title, icon and description in props

    const moonPhases = {
        "NEW MOON": phases.newMoon,
        "WAXING CRESCENT": phases.waxingC,
        "FIRST QUARTER": phases.firstQ,
        "WAXING GIBBOUS": phases.waxingG,
        "FULL MOON": phases.fullMoon,
        "WANING GIBBOUS": phases.waningG,
        "LAST QUARTER": phases.lastQ,
        "WANING CRESCENT": phases.waningC,
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
            <div className="info-container">
                <Info 
                    title="MOON PHASE"
                    icon={ supplyIcon(props.weather.current.moon_phase) }
                    alt={`A graphic of the moon in its ${props.weather.current.moon_phase.toLowerCase()} phase`}
                    desc={props.weather.current.moon_phase}
                />
                <Info
                    title="WIND SPEED"
                    icon={meteocons.wind}
                    alt="An animated graphic of blowing wind"
                    desc={props.weather.current.wind_speed + " MPH"}
                />
                <Info
                    title="VISIBILITY"
                    icon={meteocons.mist}
                    alt="An animated graphic of mist"
                    desc={props.weather.current.visibility + " MILES"}
                />
                <Info
                    title="HUMIDITY"
                    icon={meteocons.humidity}
                    alt="A graphic of a raindrop with a percentage sign in the middle"
                    desc={props.weather.current.humidity + "%"}
                />
            </div>
        </div>
    )
}