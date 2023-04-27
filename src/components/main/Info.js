export default function Info({...props}) {
    return (
        <div className="info">
            <div className="info-sub">
                <h2>{props.title}</h2>
            </div>

            <div className="info-desc">
                <p>{props.desc}</p>
            </div>

            <div className="info-icon">
                <img src={props.icon} alt={props.alt}/>
            </div>
        </div>
    )
}