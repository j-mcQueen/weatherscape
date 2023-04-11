export default function Title({weather}) {
    return (
        <div className="title-container">
            <h1>
                {weather.location.name}, {weather.location.country}
            </h1>
        </div>
    )
}