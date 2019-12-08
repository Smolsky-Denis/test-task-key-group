import React from 'react';
import './Input.css'

export const Input = (props) => {
    const {type, placeholder, value, onChange, validation} = props.data;
    return(
        <div className="form-group">
            <div className="form-control form-control-lg height">
            <label htmlFor="exampleInputEmail1" className='h6 text-primary'>{value ? placeholder : ''}</label>
                <input type={type} className={!value ? 'marginTop transparent' : 'transparent'} id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder={placeholder} value={value} onChange={onChange}/>
            <p className={!value ? 'validation text-danger' : 'text-danger'}>{validation}</p>
            </div>
        </div>
    )
};


