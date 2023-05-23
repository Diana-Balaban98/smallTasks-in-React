import React from 'react';

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValue
    onClick: (value: RatingValue) => void
}

export const Rating = ({value, onClick}: RatingPropsType) => {
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    );
};


type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValue) => void
    value: RatingValue
}

function Star({selected, onClick, value}: StarPropsType) {

    return <span onClick={() => onClick(value)}>{selected ? <b>star </b> : " star"}</span>
}

