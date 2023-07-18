import React, {useState} from 'react';
import './App.css';
import {RatingValue} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import AnalogClock from "./components/AnalogClock/AnalogClock";


function App() {
let [ratingValue, setRatingValue] = useState<RatingValue>(0)
let [isCollapsed, setIsCollapsed] = useState<boolean>(false)
let [isOn, setIsOn] = useState<boolean>(false)

    return (
        <div>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<Accordion title="Menu" collapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>*/}
            {/*<OnOff setIsOn={setIsOn} isOn={isOn}/>*/}
            {/*<UnControlledOnOff/>*/}
            <AnalogClock/>
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