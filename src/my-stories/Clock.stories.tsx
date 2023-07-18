import {ClockWithFunction} from "../components/Clock/Clock";

export default {
    title: 'Clock',
    component: ClockWithFunction
}

export const BaseAnalogExample = () => {
    return <ClockWithFunction mode="analog"/>
}

export const BaseDigitalExample = () => {
    return <ClockWithFunction mode="digital"/>
}