import React from "react";
import {ClockViewPropsType} from "./Clock";

// утилита для работы с датой
export const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView = ({time}: ClockViewPropsType) => {
    return <>
        <span>hours: {get2digitsString(time.getHours())} </span>
        <span>minutes: {get2digitsString(time.getMinutes())} </span>
        <span>seconds: {get2digitsString(time.getSeconds())}</span>
    </>
}