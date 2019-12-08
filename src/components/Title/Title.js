import React from 'react';


export const Title = (props) => {
const {text} = props.data;
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
};


