import React from "react";
import s from "./OnOff.module.css"


type OnOffPropsType = {
    setIsOn: (isOn: boolean) => void
    isOn: boolean
}

export function OnOff({setIsOn, isOn}: OnOffPropsType) {

    return (
        <div className={s.wrapper}>
            <button onClick={() => setIsOn(true)} className={`${s.button} ${isOn && s.on}`}>
                On
            </button>
            <button onClick={() => setIsOn(false)} className={`${s.button} ${!isOn && s.off}`}
            >Off
            </button>
            <div className={`${s.circle} ${isOn ? s.circleOn : s.circleOff}`}></div>
        </div>
    )
}