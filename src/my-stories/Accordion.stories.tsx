import React, {useState} from "react";
import {Accordion} from "../components/Accordion/Accordion";
import {action} from  '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion
}


const callback = action("accordion mode change event fired")
const onClick = action("some item was clicked")


const itemsList = [
    {title: "Dima", value: 1},
    {title: "Sasha", value: 2},
    {title: "Diana", value: 3},
    {title: "Victor", value: 4},
]

export const MenuCollapsedMode = () => <Accordion onClick={onClick} items={itemsList} title="Menu" collapsed={true} setIsCollapsed={callback}/>

export const UserUnCollapsedMode = () => <Accordion onClick={onClick} items={[]} title="Users" collapsed={false} setIsCollapsed={callback}/>

export const ModeChaning = () => {
    const [value, setValue] = useState(true);

    const callBack = () => {
        setValue(!value)
    }

    return <Accordion onClick={(value) => alert(`user with ID ${value} should be happy!`)} items={itemsList} title="Users" collapsed={value} setIsCollapsed={callBack}/>
}