export default function Info({...props}) {
    return (
        <div className="info weather-container">
            <div className="info-sub">
                <h2>{props.title}</h2>
            </div>

            <div className="info-icon">
                <img src={props.icon} alt={props.alt}/>
            </div>

            <div className="info-desc">
                {props.desc}
            </div>
        </div>
    )
}