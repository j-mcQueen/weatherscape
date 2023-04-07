import "./main.css";
import { useState } from "react";
import Title from "./Title";
import Temps from "./Temps";
import TempSwitch from "./TempSwitch";

export default function Main() {
    const [temp, setTemp] = useState("C");
    return (
        <main>
            <Title/>
            <Temps/>
            <TempSwitch
                temp={temp}
                setTemp={setTemp}
            />
        </main>
    )
}