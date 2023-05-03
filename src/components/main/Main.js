import "./main.css";
import Overview from "./Overview";
import Cycle from "./Cycle";
import Details from "./Details";

export default function Main({...props}) {
    return (
        <main>
            <Overview
                cycle={props.cycle}
                weather={props.weather}
                unit={props.unit}
            />
            <Cycle
                cycle={props.cycle}
                setCycle={props.setCycle}
            />
            <Details
                unit={props.unit}
                cycle={props.cycle}
                weather={props.weather}
            />
        </main>
    )
}