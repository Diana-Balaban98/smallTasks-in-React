import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}

const generateData = () => {
    // difficult counting
    console.log("GenerateData")
    return 3284982732
}

export const Example1 = () => {
    const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(initValue)
    const onClickHandler = () => {
        setCounter(counter + 2)
    }

    return (
        <div>
            {counter}
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export const Example2 = () => {
    const [counter, setCounter] = useState(generateData)
    const onClickHandler = () => {
        setCounter(counter + 2)
    }

    return (
        <div>
            {counter}
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export const Example3 = () => {
    const [counter, setCounter] = useState(generateData)
    const onClickHandler = () => {
        setCounter(prevValue => prevValue + 1)
    }

    return (
        <div>
            {counter}
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
