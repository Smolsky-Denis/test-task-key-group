import React from 'react';
import './FormHeader.css'
import {Title} from "../Title/Title";
import {ProgressLine} from "../ProgressLine/ProgressLine";


export const FormHeader = (props) => {
    return (
        <div className={'formHeaderSettings'}>
            <Title data={props.data}/>
            <div>
                <span className='text-dark h4'>CREATE ACCOUNT</span>
            </div>
            <ProgressLine data={props.data}/>
        </div>
    )
};
