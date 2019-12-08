import React from 'react';
import {createAccount} from "../../services/constants";
import {MapDataToPageElementsService} from "../../services/utils";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";

export const TimeZone = (props) => {
    // const date = new Date();
    // const offsetInHours = date.getTimezoneOffset() / 60;
    // console.log(offsetInHours)

    const goToNextStep = () => {
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
        }
    ];
    const prevStep = {
        path: '/company',
        name: 'PREV STEP',
        className: 'btn btn-danger'
    }, nextSep = {
        onClick: () => goToNextStep(),
        name: 'NEXT STEP',
        className: 'btn btn-danger'
    };
    let result = MapDataToPageElementsService.getElementFormService(pageFields);
    return(
        <div>
            {result}
            <div className='buttonFlexBetween'>
                <Link data={prevStep}/>
                <Button data={nextSep}/>
            </div>
        </div>
    )
};



