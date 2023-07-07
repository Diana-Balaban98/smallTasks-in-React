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

