import React from 'react';
import './Button.css'

export const Button = (props) => {
    const {name, color, onClick, classButton} = props.data;
    return (
        <div className='form-control-lg'>
            <button className={`btn ${color} ${classButton}`} onClick={onClick} type="button">{name}</button>
        </div>
    )
};


