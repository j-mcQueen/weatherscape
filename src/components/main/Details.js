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
                    val={
                        props.cycle === 0
                        ?
                        props.weather.current.moon_phase
                        :
                        props.cycle === 1
                        ?
                        props.weather.forecast[0].moon_phase
                        : 
                        props.cycle === 2
                        ?
                        props.weather.forecast[1].moon_phase
                        :
                        null
                    }
                    icon={ supplyIcon(props.weather.current.moon_phase) }
                    alt={`A graphic of the moon in its ${props.weather.current.moon_phase.toLowerCase()} phase`}
                />
                <Prop
                    sub="WIND SPEED"
                    val={
                        props.cycle === 0
                        ?
                        props.weather.current.wind_speed + " MPH"
                        :
                        props.cycle === 1
                        ?
                        props.weather.forecast[0].wind_speed + " MPH"
                        : 
                        props.cycle === 2
                        ?
                        props.weather.forecast[1].wind_speed + " MPH"
                        :
                        null
                    }
                    icon={meteocons.wind}
                    alt="An animated graphic of blowing wind"
                />
                <Prop
                    sub="VISIBILITY"
                    val={
                        props.cycle === 0
                        ?
                        props.weather.current.visibility + " MILES"
                        :
                        props.cycle === 1
                        ?
                        props.weather.forecast[0].visibility + " MILES"
                        : 
                        props.cycle === 2
                        ?
                        props.weather.forecast[1].visibility + " MILES"
                        :
                        null
                    }
                    icon={meteocons.mist}
                    alt="An animated graphic of mist"
                />
                <Prop
                    sub="HUMIDITY"
                    val={
                        props.cycle === 0
                        ?
                        props.weather.current.humidity + "%"
                        :
                        props.cycle === 1
                        ?
                        props.weather.forecast[0].humidity + "%"
                        : 
                        props.cycle === 2
                        ?
                        props.weather.forecast[1].humidity + "%"
                        :
                        null
                    }
                    icon={meteocons.humidity}
                    alt="A graphic of a raindrop with a percentage sign in the middle"
                />
            </div>
        </div>
    )
}