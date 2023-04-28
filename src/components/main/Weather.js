import Overview from "./Overview";
import Details from "./Details";

export default function Weather({...props}) {
    return (
        <div className="weather">
            <Overview
                weather={props.weather}
                temp={props.temp}
            />
            <Details
                weather={props.weather}
                temp={props.temp}
            />
        </div>
    )
}