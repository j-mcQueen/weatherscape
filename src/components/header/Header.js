import "./header.css";
import Logo from "./Logo";
import Search from "./Search";
import Toggle from "./Toggle";

export default function Header({...props}) {
    return (
        <header>
            <Logo/>
            <Search
                data={props.data}
                setData={props.setData}
            />
            <Toggle
                temp={props.temp}
                setTemp={props.setTemp}
            />
        </header>
    )
}