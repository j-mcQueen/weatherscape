import "./header.css";
import Logo from "./Logo";
import Search from "./Search";

export default function Header({...props}) {
    return (
        <header>
            <Logo/>
            <Search
                location={props.location}
                setLocation={props.setLocation}
            />
        </header>
    )
}