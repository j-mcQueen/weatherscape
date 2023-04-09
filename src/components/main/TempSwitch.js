export default function TempSwitch() {
    return (
        <div className="switch-container">
            <span>Centigrade</span>
            <label className="switch" htmlFor="check">
                <input type="checkbox" name="check" id="check"></input>
                <span className="slider"></span>
            </label>
            <span>Fahrenheit</span>
        </div>
    )
}