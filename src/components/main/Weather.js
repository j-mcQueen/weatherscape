import Overview from "./Overview";
import Details from "./Details";
import Outlook from "./Outlook";
import Forecast from "./Forecast";

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
            <Outlook
                weather={props.weather}
            />
            <Forecast/>
        </div>
    )
}