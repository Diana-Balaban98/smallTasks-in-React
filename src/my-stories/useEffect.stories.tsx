import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")

// useEffect срабатывает только после того, как разметка отображена на странице, только после этого React запускает
// зарегестрированный useEffect
    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    // после того, когда компонента вмонтировалась в первый рендер
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])

    // после первого рендера и когда counter меняется
    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            {counter}
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};


export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample")


    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        // асинхронные операции и запросы на сервер делать внутри useEffect
        setTimeout(() => {
            console.log("SETTIMEOUT")
            document.title = counter.toString()
        }, 1000)
    }, [counter])


    return (
        <div>
            {counter}
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample")

    useEffect(() => {
        // асинхронные операции и запросы на сервер делать внутри useEffect
        setInterval(() => {
            console.log("SETINTERVAL!!!")
            setCounter(prev => prev + 1)
        }, 2000)
    }, [])


    return (
        <div>
            Hello, counter: {counter}
        </div>
    );
};