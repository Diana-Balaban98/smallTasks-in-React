import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

// 1.
// неконтролируемый инпут - можем ввводить что угодно
export const UncontrolledInput = () => <input/>

// 2.
// треакем value у неконтролируемого инпута - в нём значение меняется само по себе и нам передавать его внутрь не надо
export const TrackValueOfUncontrolledInput = () => {
    // создаем локальный стейт
    const [value, setValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>
        <input onChange={onChangeHandler}/> - {value}
        {/*value внешнего мира, внутри инпут мы не контролируем*/}
    </>
}

// 3.
export const GetValueOfUncontrolledInputByButtonPress = () => {
    // создаем локальный стейт
    const [value, setValue] = useState("")

    const actualValue = useRef<HTMLInputElement | null>(null) // создали ссылку,
    // потом привязали эту ссылку к инпуту с помощью атрибута ref
    // в большинстве случаем ссылок (рефов) лучше избегать

    const onClickHandlerSave = () => {
        const elem = actualValue.current as HTMLInputElement
        setValue(elem.value)
    }

    return <>
        <input ref={actualValue}/>
        <button onClick={onClickHandlerSave}>save</button>
        - actual value: {value}
        {/*value внешнего мира, внутри инпут мы не контролируем*/}
    </>
}

// 4.
// контролируемый инпут - строго задаем value, контролируем его значение, которое он внутри себя показывает
export const СontrolledInputWithFixedValue = () => <input value={"it-incubator"}/>

// 5.
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

// 6.
export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
}

// 7.
// когда работаешь с селектом, нужно думать про изменения значения самого селекта
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
