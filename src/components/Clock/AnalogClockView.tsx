import React from "react";
import {ClockViewPropsType} from "./Clock";
import s from './AnalogClockView.module.css'

export const AnalogClockView = ({time}: ClockViewPropsType) => {
    const secondsStyle = {
        transform: `rotate(${time.getSeconds() * 6}deg)`
    };

    const minutesStyle = {
        transform: `rotate(${time.getMinutes() * 6}deg)`
    };

    const hoursStyle = {
        transform: `rotate(${time.getHours() * 30}deg)`
    };

    return <div className={s.clock}>
        <div className={s["analog-clock"]}>
            <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
            <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
            <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
        </div>
    </div>
}