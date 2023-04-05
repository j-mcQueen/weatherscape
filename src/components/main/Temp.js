export default function Temp({...props}) {
    return (
        <div className="temps">
            <button
                type="button"
                onClick={() => {props.setTemp("C")}}
                id={props.temp === "C" ? "active" : null}
            >
                Centigrade
            </button>
            
            <button
                type="button"
                onClick={() => {props.setTemp("F")}}
                id={props.temp === "F" ? "active" : null}
            >
                Fahrenheit
            </button>
        </div>
    )
}