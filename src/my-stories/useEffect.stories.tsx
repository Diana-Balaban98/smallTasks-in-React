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
        const timeoutId = setTimeout(() => {
            console.log("SETTIMEOUT")
            document.title = counter.toString()
        }, 1000)

        return () => clearTimeout(timeoutId)
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
    console.log("SetIntervalExample")

    useEffect(() => {
        // асинхронные операции и запросы на сервер делать внутри useEffect
        const intervalId = setInterval(() => {
            console.log("SETINTERVAL!!!")
            setCounter(prev => prev + 1)
        }, 2000)

        return () => clearInterval(intervalId)
    }, [])


    return (
        <div>
            Hello, counter: {counter}
        </div>
    );
};


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        // сброс эффекта срабатывает либо, когда компонента "умирает", либо перед очередным вызовом этого эффекта
        return () => {
            console.log("RESET EFFECT: " + counter)
        }
    }, [counter])


    return (
        <div>
            Hello, counter: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export const KeysTrackerExample = () => {

    const [text, setText] = useState("")
    console.log("Component rendered")

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => window.document.removeEventListener('keypress', handler)
    }, [text])


    return (
        <>
            Typed text: {text}
        </>
    );
};

export const SetTimeoutExample2 = () => {

    const [text, setText] = useState("")
    console.log("Component rendered")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText('3 seconds passed')
        }, 3000)
        return () => clearTimeout(timeoutId)

    }, [text])

    return (
        <>
            text: {text}
        </>
    );
};