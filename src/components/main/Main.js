import "./main.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Main({...props}) {
    return (
        <main>
            <Weather
                weather={props.weather}
                temp={props.temp}
            />
            <Forecast/>
        </main>
    )
}