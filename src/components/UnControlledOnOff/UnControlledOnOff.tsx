import React, {useState} from "react";
import s from "./UnControlledOnOff.module.css"




export function UnControlledOnOff() {
    const [isOn, setIsOn] = useState<boolean>(false)
    const onClickHandler = (value: boolean) => {
        setIsOn(value)
    }

    return (
        <div className={s.wrapper}>
            <button onClick={() => onClickHandler(true)} className={`${s.button} ${isOn && s.on}`}>
                On
            </button>
            <button onClick={() => onClickHandler(false)} className={`${s.button} ${!isOn && s.off}`}
            >Off
            </button>
            <div className={`${s.circle} ${isOn ? s.circleOn : s.circleOff}`}></div>
        </div>
    )
}