import React from 'react';
import Form from 'react-bootstrap/Form'

export const Select = (props) => {

    const {options = [], value, onChange} = props.data;

    return (<Form.Control as="select" value={value} onChange={onChange}>
            {options.map(option => <option key={option.name}>{option.name}</option>)}
        </Form.Control>)
};


