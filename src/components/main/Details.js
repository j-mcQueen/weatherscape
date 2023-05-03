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
                    icon={ 
                        props.cycle === 0
                        ?
                        supplyIcon(props.weather.current.moon_phase)
                        :
                        props.cycle === 1
                        ?
                        supplyIcon(props.weather.forecast[0].moon_phase)
                        : 
                        props.cycle === 2
                        ?
                        supplyIcon(props.weather.forecast[1].moon_phase)
                        :
                        null
                     }
                    alt={`A graphic of the moon in its ${props.weather.current.moon_phase.toLowerCase()} phase`}
                />
                <Prop
                    sub="WIND SPEED"
                    val={
                        // check cycle state and unit and return the data with the corresponding value + units
                        props.cycle === 0
                        ?
                        props.unit === "metric" ? (props.weather.current.wind_kph + " KPH") : (props.weather.current.wind_mph + " MPH")
                        :
                        props.cycle === 1
                        ?
                        props.unit === "metric" ? (props.weather.forecast[0].wind_kph + " KPH") : (props.weather.forecast[0].wind_mph + " MPH")
                        : 
                        props.cycle === 2
                        ?
                        props.unit === "metric" ? (props.weather.forecast[1].wind_kph + " KPH") : (props.weather.forecast[1].wind_mph + " MPH")
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
                        props.unit === "metric" ? (props.weather.current.vis_km + " KM") : (props.weather.current.vis_miles + " MILES")
                        :
                        props.cycle === 1
                        ?
                        props.unit === "metric" ? (props.weather.forecast[0].vis_km + " KM") : (props.weather.forecast[0].vis_miles + " MILES")
                        : 
                        props.cycle === 2
                        ?
                        props.unit === "metric" ? (props.weather.forecast[1].vis_km + " KM") : (props.weather.forecast[1].vis_miles + " MILES")
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