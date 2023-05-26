import phases from "./exports/phases";
import meteocons from "./exports/meteocons";
import Prop from "./Prop";

export default function Details({ ...props }) {
  // each info component gets passed a sub, icon and description in props
  let today = props.weather.current;
  let tmrw = props.weather.forecast[0];
  let next = props.weather.forecast[1];

  const moonPhases = {
    "NEW MOON": phases.newMoon,
    "WAXING CRESCENT": phases.waxingC,
    "FIRST QUARTER": phases.firstQ,
    "WAXING GIBBOUS": phases.waxingG,
    "FULL MOON": phases.fullMoon,
    "WANING GIBBOUS": phases.waningG,
    "LAST QUARTER": phases.lastQ,
    "WANING CRESCENT": phases.waningC,
  };

  const supplyIcon = (phase) => {
    for (let key in moonPhases) {
      if (key === phase) {
        return moonPhases[key];
      }
    }
  };

  const setStaticProp = (a, b, c) => {
    return props.cycle === 0
      ? a
      : props.cycle === 1
      ? b
      : props.cycle === 2
      ? c
      : null;
  };

  const setUnitProp = (a, b, c, d, e, f, met, imp) => {
    // check cycle state and unit and return the data with the corresponding value + units
    return props.cycle === 0
      ? props.unit === "metric"
        ? a + met
        : b + imp
      : props.cycle === 1
      ? props.unit === "metric"
        ? c + met
        : d + imp
      : props.cycle === 2
      ? props.unit === "metric"
        ? e + met
        : f + imp
      : null;
  };

  return (
    <div className="properties">
      <div className="prop-container">
        <Prop
          sub="MOON PHASE"
          val={setStaticProp(
            today.moon_phase,
            tmrw.moon_phase,
            next.moon_phase
          )}
          icon={setStaticProp(
            supplyIcon(today.moon_phase),
            supplyIcon(tmrw.moon_phase),
            supplyIcon(next.moon_phase)
          )}
          alt={`A graphic of the moon in its ${props.weather.current.moon_phase.toLowerCase()} phase`}
        />
        <Prop
          sub="WIND SPEED"
          val={setUnitProp(
            today.wind_kph,
            today.wind_mph,
            tmrw.wind_kph,
            tmrw.wind_mph,
            next.wind_kph,
            next.wind_mph,
            " KPH",
            " MPH"
          )}
          icon={meteocons.wind}
          alt="An animated graphic of blowing wind"
        />
        <Prop
          sub="VISIBILITY"
          val={setUnitProp(
            today.vis_km,
            today.vis_miles,
            tmrw.vis_km,
            tmrw.vis_miles,
            next.vis_km,
            next.vis_miles,
            " KM",
            " MILES"
          )}
          icon={meteocons.mist}
          alt="An animated graphic of mist"
        />
        <Prop
          sub="HUMIDITY"
          val={
            setStaticProp(today.humidity, tmrw.humidity, next.humidity) + "%"
          }
          icon={meteocons.humidity}
          alt="A graphic of a raindrop with a percentage sign in the middle"
        />
      </div>
    </div>
  );
}
