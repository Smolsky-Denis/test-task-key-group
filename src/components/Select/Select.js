import React from 'react';
import './Select.css'

export const Select = (props) => {

    const {options = [], value, onChange, validation, name, placeholder} = props.data;

    return (
        <div className="form-group">
            <div className='form-control form-control-lg selectHeight'>
                <label htmlFor={name} className='h6 text-primary'>{value ? placeholder : ''}</label>
                <select as="select" className='transparent selectMarginTop' value={value} onChange={onChange}>
                    <option value="">---Select---</option>
                    {options.map(option => <option key={option}>{option}</option>)}
                </select>
            </div>
            <p className={validation ? 'validation text-danger' : ''}>{validation}</p>
        </div>
    )
};


