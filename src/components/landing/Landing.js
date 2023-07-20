import "./landing.css";
import Logo from "./Logo";
import Search from "./Search";
import Toggle from "./Toggle";

export default function Landing({ ...props }) {
  return (
    <header
      style={
        !props.data ? { position: "absolute", top: "calc(50% - 200px)" } : null
      }
    >
      <Logo />
      <Search data={props.data} setData={props.setData} />
      <Toggle unit={props.unit} setUnit={props.setUnit} />
    </header>
  );
}
