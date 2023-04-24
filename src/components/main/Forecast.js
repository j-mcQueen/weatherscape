import horizon from "../../assets/all/horizon.svg";
import raindrops from "../../assets/all/raindrops.svg";
import wind from "../../assets/all/wind.svg";
import thermometer from "../../assets/all/thermometer.svg";

export default function Forecast() {
    return (
        <div className="forecast">
            <table className="forecast-table weather-container">
                <thead>
                    <tr>
                        <th>
                            day
                            <img className="forecast-icon" src={horizon} alt="The sun behind a horizon"/>
                        </th>

                        <th>
                            rain chance
                            <img className="forecast-icon" src={raindrops} alt="Two raindrops"/>
                        </th>
                        <th>
                            wind speed
                            <img className="forecast-icon" src={wind} alt="Blowing wind"/>
                        </th>
                        <th>
                            avg temp
                            <img className="forecast-icon" src={thermometer} alt="A thermometer"/>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}