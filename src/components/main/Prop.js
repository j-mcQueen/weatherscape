export default function Prop({...props}) {
    return (
        <div className="prop">
            <div className="prop-sub">
                <h2>{props.sub}</h2>
            </div>

            <div className="prop-val">
                <p>{props.val}</p>
            </div>

            <div className="prop-icon">
                <img src={props.icon} alt={props.alt}/>
            </div>
        </div>
    )
}