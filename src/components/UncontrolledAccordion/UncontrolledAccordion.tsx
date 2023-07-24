import React, {useReducer} from "react";


type AccordionPropsType = {
    title: string
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case "CHANGE-COLLAPSED":
            return !state
        default: return state
    }
}

const changeCollapsedAC = (value: boolean) => ({
    type: "CHANGE-COLLAPSED",
})

export function UncontrolledAccordion({title}: AccordionPropsType) {
    const [collapsed, dispatch] = useReducer(reducer, false)

    const onClickHiddenHandler = () => {
        dispatch(changeCollapsedAC(!collapsed))
    }

    return <div>
        <AccordionTitle title={title} onClickHiddenHandler={onClickHiddenHandler}/>

        {/*условный рендеринг*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClickHiddenHandler: () => void
}

function AccordionTitle({title, onClickHiddenHandler}: AccordionTitlePropsType) {

    return <h3 style={{cursor: "pointer"}} onClick={onClickHiddenHandler}>{title}</h3>
}

function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

