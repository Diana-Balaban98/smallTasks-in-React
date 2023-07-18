import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


export const Clock = () => {
    console.log('Clock rendering')

    const [time, setTime] = useState<Date>(new Date())
    const timeOfDate = time.toLocaleTimeString()

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return (
        <div>
            <div>Time:</div>
            <span>{timeOfDate}</span>
        </div>
    );
};



type PropsType = {
    mode: 'digital' | 'analog'
}

export const ClockWithFunction = ({mode}: PropsType) => {

    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("Tick")
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    let view;

    switch (mode) {
        case "analog":
            view = <AnalogClockView time={time}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView time={time}/>
    }

    return (
        <div>
            <div>Time:</div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    time: Date
}

