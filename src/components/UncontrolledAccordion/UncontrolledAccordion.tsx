import React, {useState} from "react";


type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion({title}: AccordionPropsType) {
    const [isHidden, setHidden] = useState<boolean>(false)

    const onClickHiddenHandler = () => {
        setHidden(!isHidden)
    }

    return <div>
        <AccordionTitle title={title} onClickHiddenHandler={onClickHiddenHandler}/>
        {isHidden && <AccordionBody/>}
        {/*условный рендеринг*/}
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

