import React from 'react';
import {createAccount} from "../../services/constants";
import {MapDataToPageElementsService} from "../../services/utils";


export const TimeZone = (props) => {
    // const date = new Date();
    // const offsetInHours = date.getTimezoneOffset() / 60;
    // console.log(offsetInHours)

    const handleClick = () => {
        props.history.push('/create-account');
    };
    const pageFields = [
        {
            id: 0,
            element: 'title',
            text: 'Time Zone',
            className: ''
        }, createAccount,{
            id: 2,
            element: 'progress'
        },{
            id: 3,
            element: 'input',
            name: 'timeZone',
            type: 'text',
            placeholder: 'Select your timezone',
            className: ''
        },{
            id: 5,
            path: '/company',
            element: 'link',
            name: 'PREV STEP',
            className: 'btn btn-danger'
        },{
            id: 6,
            element: 'button',
            onClick: () => handleClick(),
            name: 'NEXT STEP',
            className: 'btn btn-danger'
        }
    ];

    let result = MapDataToPageElementsService.getElementFormService(pageFields);
    return(
        <div>
            {result}
        </div>
    )
};



