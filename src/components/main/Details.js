import phases from "./exports/phases";
import meteocons from "./exports/meteocons";
import Prop from "./Prop";

export default function Details({...props}) {
    // each info component gets passed a sub, icon and description in props

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
        <div className="properties">
            <div className="prop-container">
                <Prop 
                    sub="MOON PHASE"
                    val={props.weather.current.moon_phase}
                    icon={ supplyIcon(props.weather.current.moon_phase) }
                    alt={`A graphic of the moon in its ${props.weather.current.moon_phase.toLowerCase()} phase`}
                />
                <Prop
                    sub="WIND SPEED"
                    val={props.weather.current.wind_speed + " MPH"}
                    icon={meteocons.wind}
                    alt="An animated graphic of blowing wind"
                />
                <Prop
                    sub="VISIBILITY"
                    val={props.weather.current.visibility + " MILES"}
                    icon={meteocons.mist}
                    alt="An animated graphic of mist"
                />
                <Prop
                    sub="HUMIDITY"
                    val={props.weather.current.humidity + "%"}
                    icon={meteocons.humidity}
                    alt="A graphic of a raindrop with a percentage sign in the middle"
                />
            </div>
        </div>
    )
}