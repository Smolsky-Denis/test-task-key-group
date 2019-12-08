import React from 'react';
import './Title.css'

export const Title = (props) => {
const {text} = props.data;
    return (
        <div className='titleColor h2'>
            {text}
        </div>
    )
};


