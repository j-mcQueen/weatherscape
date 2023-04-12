export default function TempSwitch({...props}) {
    return (
        <div className="switch-container">
            <span>Centigrade</span>
            <label className="switch" htmlFor="check">
                <input 
                    onChange={() => {
                        (props.temp === "C") ? props.setTemp("F") : props.setTemp("C");
                    }}
                    type="checkbox" 
                    name="check" 
                    id="check"></input>
                <span className="slider"></span>
            </label>
            <span>Fahrenheit</span>
        </div>
    )
}