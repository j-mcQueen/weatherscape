import Day from "./Day";
import { useEffect } from "react";
import { animated, useTransition, useSpringRef } from "@react-spring/web";

export default function Overview({...props}) {
    const cards = [
        ({style}) => (
            <animated.div style={style} className="day">
                <Day
                    unit={props.unit}
                    location={props.weather.location}
                    date="TODAY"
                    temp_c={props.weather.current.temp_c}
                    temp_f={props.weather.current.temp_f}
                    condition={props.weather.current.condition_text}
                    sunset={props.weather.current.sunset}
                    rain_chance={props.weather.current.rain_chance}
                />
            </animated.div>            
        ),
        ({style}) => (
            <animated.div style={style} className="day">
                <Day
                    unit={props.unit}
                    location={props.weather.location}
                    date="TOMORROW"
                    temp_c={props.weather.forecast[0].temp_c}
                    temp_f={props.weather.forecast[0].temp_f}
                    condition={props.weather.forecast[0].condition}
                    sunset={props.weather.forecast[0].sunset}
                    rain_chance={props.weather.forecast[0].rain_chance}
                />
            </animated.div>            
        ),
        ({style}) => (
            <animated.div style={style} className="day">
                <Day
                    unit={props.unit}
                    location={props.weather.location}
                    date={props.weather.forecast[1].date}
                    temp_c={props.weather.forecast[1].temp_c}
                    temp_f={props.weather.forecast[1].temp_f}
                    condition={props.weather.forecast[1].condition}
                    sunset={props.weather.forecast[1].sunset}
                    rain_chance={props.weather.forecast[1].rain_chance}
                />
            </animated.div>            
        ),
    ];

    const transRef = useSpringRef();
    const transitions =  useTransition(props.cycle, {
        ref: transRef,
        keys: null,
        config: {
            // control speed of animation
            mass: 1,
            friction: 25,
            tension: 175,    
        },
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0 },
        exitBeforeEnter: true,
    });

    useEffect(() => {
        // links cycle state updates to configured animation triggers without rerenders
        transRef.start();
    }, [props.cycle]);

    return (
        <div className="overview">
            <div className="day-container">
                {transitions((style, i) => {
                    const Card = cards[i];
                    return <Card style={style}/>
                })}
            </div>           
        </div>
    )
}