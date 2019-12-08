import React from 'react';
import './Input.css'

export const Input = (props) => {
    const {type, placeholder, value, onChange, validation, name} = props.data;
    return (
        <div className="form-group">
            <div className="form-control form-control-lg inputHeight">
                <label htmlFor={name} className='h6 text-primary'>{value ? placeholder : ''}</label>
                <input type={type} className={!value ? 'inputMarginTop transparent' : 'transparent'} id={name}
                       aria-describedby="emailHelp"
                       placeholder={placeholder} value={value} onChange={onChange}/>
            </div>
            <p className={validation ? 'validation text-danger' : ''}>{validation}</p>
        </div>
    )
};


