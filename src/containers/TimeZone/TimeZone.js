import React from 'react';
import {
    checkRequiredField,
    MapDataToPageElementsService
} from "../../services/utils";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {useDispatch} from "react-redux";
import {useTimezoneConfig} from "./useTimezoneConfig";

export const TimeZone = (props) => {

    const {
        timezone,
        setTimezone,
        timezoneValidation,
        setTimezoneValidation,
        timezoneList
    } = useTimezoneConfig();

    const dispatch = useDispatch();

    const goToNextStep = () => {
        const timezoneError = checkRequiredField(timezone);
        setTimezoneValidation(timezoneError);
        if(!timezoneError.length) {
            dispatch({type: "SAVE_TIMEZONE", timezone});
            props.history.push('/create-account');
        }
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
            value: timezone,
            options: timezoneList,
            onChange: (event) => {
                setTimezone(event.target.value)
            },
            validation: timezoneValidation
        }
    ];

    const prevStep = {
        path: '/company',
        name: '< PREV STEP',
        color: 'btn-outline'
    }, nextSep = {
        onClick: () => goToNextStep(),
        name: 'NEXT STEP >',
        color: 'btn-pink'
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



