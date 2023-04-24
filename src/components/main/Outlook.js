export default function Outlook({...props}) {
    const suggestions = {
        temp: {
            cold: "3 layers of clothing + accessories.",
            mild: "2-3 layers of clothing.",
            warm: "1-2 layers of clothing.",
            hot: "1 layer of clothing.",
        },
        rain: {
            none: "No rain is forecast.",
            possible: "It might rain today - consider taking a waterproof or umbrella.",
            probable: "Rain is forecast - take a waterproof layer or umbrella.",
        },
        wind: {
            calm: "A calm day to very light winds are expected.",
            breeze: "There will be a nice breeze in the air today.",
            windy: "It's going to be windy today.",
            gales: "Strong winds are forecast - take necessary precautions.",
        },
    }

    const checkTemp = (temp) => {
        if (temp <= 5) {
            return suggestions.temp.cold;
        } else if (temp >= 5 && temp < 19) {
            return suggestions.temp.mild;
        } else if (temp >= 20 && temp < 29) {
            return suggestions.warm;
        } else {
            return suggestions.temp.hot;
        }
    }

    const checkRain = (rainChance) => {
        if (rainChance === 0) {
            return suggestions.rain.none;
        } else if (rainChance > 0 && rainChance < 40) {
            return suggestions.rain.possible;
        } else {
            return suggestions.rain.probable;
        }
    }

    const checkWind = (windSpeed) => {
        if (windSpeed < 7) {
            return suggestions.wind.calm;
        } else if (windSpeed >= 7 && windSpeed < 18) {
            return suggestions.wind.breeze;
        } else if (windSpeed >= 18 && windSpeed < 25) {
            return suggestions.wind.windy;
        } else {
            return suggestions.wind.gales;
        }
    }

    return (
        <div className="outlook weather-container">
            <h2>outlook</h2>
            
            <ul>
                <li>
                    {checkTemp(props.weather.current.temp_c)}
                </li>

                <li>
                    {checkRain(props.weather.forecast.rain_chance)}
                </li>

                <li>
                    {checkWind(props.weather.forecast.maxwind_mph)}
                </li>
            </ul>
        </div>
    )
}