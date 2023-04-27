import Details from "./Details";
import "./main.css";
import Overview from "./Overview";

export default function Main({...props}) {
    return (
        <main>
            <Overview
                weather={props.weather}
                temp={props.temp}
            />
            <Details
                weather={props.weather}
            />
        </main>
    )
}