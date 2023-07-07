import React from 'react';

export type ItemType = {
    title: string
    value: any

}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = ({title, collapsed, setIsCollapsed, items, onClick}: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={title} setIsCollapsed={setIsCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody onClick={onClick} items={items}/>}
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
}

function AccordionTitle({title, setIsCollapsed, collapsed}: AccordionTitlePropsType) {
    const onClickHandler = () => {
        setIsCollapsed(!collapsed)
    }

    return <h3 onClick={onClickHandler} style={{cursor: "pointer"}}>{title}</h3>
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyType) {
    const itemsList = items.map((i, index) => <li onClick={() => onClickHandler(i.value)} key={index}>{i.title}</li>)

    const onClickHandler = (i: any) => {
        onClick(i)
    }

    return <ul>
        {itemsList}
    </ul>
}

