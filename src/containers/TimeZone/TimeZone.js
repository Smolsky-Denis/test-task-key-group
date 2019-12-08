import React from 'react';
import {createAccount} from "../../services/constants";
import {MapDataToPageElementsService} from "../../services/utils";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {getAllTimezones, getTimezone} from 'countries-and-timezones';

export const TimeZone = (props) => {

    const currentTimezone = getTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const timezoneList = Object.values(getAllTimezones());

    const goToNextStep = () => {
        props.history.push('/create-account');
    };
    const pageFields = [
        {
            id: 0,
            element: 'formHeader',
            text: <span>Set your time zone</span>,
            progress: 80
        }, {
            id: 3,
            element: 'select',
            name: 'timeZone',
            type: 'text',
            placeholder: 'Select your timezone',
            className: '',
            value: currentTimezone,
            options: timezoneList
        }
    ];
    const prevStep = {
        path: '/company',
        name: 'PREV STEP'
    }, nextSep = {
        onClick: () => goToNextStep(),
        name: 'NEXT STEP'
    };
    let result = MapDataToPageElementsService.getElementFormService(pageFields);
    return (
        <div>
            {result}
            <div className='buttonFlexBetween'>
                <Link data={prevStep}/>
                <Button data={nextSep}/>
            </div>
        </div>
    )
};



