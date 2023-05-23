import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
}

export const Accordion = ({title, collapsed, setIsCollapsed}: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={title} setIsCollapsed={setIsCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string
    setIsCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle({title, setIsCollapsed, collapsed}: AccordionTitlePropsType) {

    return <h3 onClick={() => setIsCollapsed(!collapsed)} style={{cursor: "pointer"}}>{title}</h3>
}

function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

