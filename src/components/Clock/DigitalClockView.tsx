import React from "react";
import {ClockViewPropsType} from "./Clock";

// утилита для работы с датой
export const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView = ({time}: ClockViewPropsType) => {
    return <>
        <span>{get2digitsString(time.getHours())} hours: </span>
        <span>{get2digitsString(time.getMinutes())} minutes: </span>
        <span>{get2digitsString(time.getSeconds())} seconds</span>
    </>
}