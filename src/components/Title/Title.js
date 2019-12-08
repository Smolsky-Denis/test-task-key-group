import React from 'react';


export const Title = (props) => {
const {text} = props.data;
    return (
        <div className='text-secondary h2'>
            {text}
        </div>
    )
};


