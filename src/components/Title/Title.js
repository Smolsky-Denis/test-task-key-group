import React from 'react';


export const Title = (props) => {
const {text, className} = props.data;
    return (
        <div className={className || 'text-secondary h2'}>
            {text}
        </div>
    )
};


