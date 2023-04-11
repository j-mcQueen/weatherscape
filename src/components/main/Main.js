import "./main.css";
import Title from "./Title";
import Temps from "./Temps";
import TempSwitch from "./TempSwitch";
import Forecast from "./Forecast";

export default function Main({...props}) {
    return (
        <main>
            <Title
                weather={props.weather}
            />
            <Temps/>
            <TempSwitch/>
            <Forecast/>
        </main>
    )
}