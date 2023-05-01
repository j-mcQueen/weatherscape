export default function Toggle({...props}) {
    return (
        <div className="toggle">
            <div className="toggle-container">
                <span>METRIC</span>
                <div className="toggle-btns">
                    <button
                        onClick={() => props.setTemp("C")}
                        className={ props.temp === "C" ? "active" : null }
                        type="button"></button>
                    <button
                        onClick={() => props.setTemp("F")}
                        className={ props.temp === "F" ? "active" : null }
                        type="button"></button>
                </div>
                <span>IMPERIAL</span>
            </div>
        </div>
    )
}