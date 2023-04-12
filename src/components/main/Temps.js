export default function Temps({...props}) {
    const forecastDay = props.weather.forecast.forecastday[0].day;

    // came across a bug where the API sometimes (depending on location) returns a lower/ higher current temperature than the API's own min/max temperatures for the day. minTempCheck() and maxTempCheck() below provide a fix for that behaviour where it occurs.

    const minTempCheck = () => {
        if (props.temp === "C") {
            return (Math.floor(props.weather.current.temp_c) < Math.floor(forecastDay.mintemp_c)) 
                    ? Math.floor(props.weather.current.temp_c) 
                    : Math.floor(forecastDay.mintemp_c)
        } else {
            return (Math.floor(props.weather.current.temp_f) < Math.floor(forecastDay.mintemp_f)) 
                    ? Math.floor(props.weather.current.temp_f) 
                    : Math.floor(forecastDay.mintemp_f)
        }
    }

    const maxTempCheck = () => {
        if (props.temp === "C") {
            return (Math.floor(props.weather.current.temp_c) > Math.floor(forecastDay.maxtemp_c)) 
                    ? Math.floor(props.weather.current.temp_c) 
                    : Math.floor(forecastDay.maxtemp_c)
        } else {
            return (Math.floor(props.weather.current.temp_f) > Math.floor(forecastDay.maxtemp_f)) 
                    ? Math.floor(props.weather.current.temp_f) 
                    : Math.floor(forecastDay.maxtemp_f)
        }
    }

    return (
        <div className="temps-container">
            <div id="min" className="mini">
                L: 
                {
                    minTempCheck()
                }
            </div>

            <div id="current">
                {
                    props.temp === "C"
                    ?
                    Math.floor(props.weather.current.temp_c)
                    :
                    Math.floor(props.weather.current.temp_f)
                }
            </div>

            <div id="max" className="mini">
                H:  
                {
                    maxTempCheck()
                }
            </div>
        </div>
    )
}