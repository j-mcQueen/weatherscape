import "./main.css";
import Overview from "./Overview";
import Cycle from "./Cycle";
import Details from "./Details";

export default function Main({...props}) {
    return (
        <main>
            <Overview
                weather={props.weather}
                temp={props.temp}
            />
            <Cycle
                cycle={props.cycle}
                setCycle={props.setCycle}
            />
            <Details
                weather={props.weather}
            />
        </main>
    )
}