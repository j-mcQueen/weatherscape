import "./main.css";
import Weather from "./Weather";

export default function Main({...props}) {
    return (
        <main>
            <Weather
                weather={props.weather}
                temp={props.temp}
            />
        </main>
    )
}