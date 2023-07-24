import React, {useState} from 'react';
import './App.css';
import {RatingValue} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App() {
let [ratingValue, setRatingValue] = useState<RatingValue>(0)
let [isCollapsed, setIsCollapsed] = useState<boolean>(false)
let [isOn, setIsOn] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordion title="Testing reducer"/>
            <OnOff setIsOn={setIsOn} isOn={isOn}/>
            <UnControlledOnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle({title}: PageTitlePropsType) {

    return <h1>{title}</h1>
}

export default App;