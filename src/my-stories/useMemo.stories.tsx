import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const Example1 = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    const onChangeHandler = (callback: (value: number) => void, value: number) => {
        callback(value)
    }

    let resultA = 1;
    let resultB = 1;

    // useMemo вычисляет и запоминает результат вычисления до тех пор, пока a не поменяется, если a поменяется, то перезапускает функцию
    // и делает пересчет

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i ++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i ++) {
        resultB *= i
    }


    return <>
        <input value={a} onChange={(e) => onChangeHandler(setA, Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => onChangeHandler(setB, Number(e.currentTarget.value))}/>
        <hr/>

        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
        </>
};