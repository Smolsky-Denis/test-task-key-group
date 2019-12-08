import React from 'react';


export const Input = (props) => {
    const {type, placeholder, value, onChange, validation} = props.data;
    return(
        <div className="form-group">
            <input type={type} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder={placeholder} value={value} onChange={onChange}/>
            <p>{validation}</p>
        </div>
    )
};


