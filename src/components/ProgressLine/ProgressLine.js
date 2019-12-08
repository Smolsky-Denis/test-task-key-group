import React from 'react';
import {ProgressBar} from "react-bootstrap";
import './ProgressLine.css'

 export const ProgressLine = (props) => {
    const {progress = 0} = props.data;
     return(
         <div>
             <ProgressBar now={progress} />
         </div>
     )
 };
