import "./main.css";
import Temp from "./Temp";
import { useState } from "react";

export default function Main() {
    const [temp, setTemp] = useState("C");
    return (
        <main>
            <Temp
                temp={temp}
                setTemp={setTemp}
            />
        </main>
    )
}