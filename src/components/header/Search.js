import { useState } from "react";

export default function Search({...props}) {
    const [entry, setEntry] = useState("");

    const getCurrentWeather = async (entry) => {
        try {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=bd97af2f01b7405fbec133733233103&q=${entry}`;
            const response = await fetch(url, {mode: "cors"});
            const result = await response.json();
            props.setData(result);
        } catch(error) {
            // TODO : is NOT functional, doesn't catch errors properly
            alert(error);
        }
    }

    return (
        <form role="search">
            <input 
                type="search"
                name="search"
                id="search"
                onChange={(e) => { setEntry(e.target.value); }}
                aria-label="Search for a location"
                placeholder="Enter a location..."
                required/>
            <button 
                type="submit"
                onClick={(e) => {
                    if (entry !== "") {
                        e.preventDefault();
                        getCurrentWeather(entry);
                    }
                }}
                className="search-icon"
                aria-label="Submit the search form">
                <svg 
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16">
                        <path 
                            fillRule="evenodd" 
                            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z">
                        </path>
                </svg>
            </button>
        </form>
    )
}