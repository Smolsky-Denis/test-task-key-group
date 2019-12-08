import React, {useState} from 'react';
import {createAccount} from "../../services/constants";
import {
    checkRequiredField,
    getCurrentTimezone,
    getTimezoneList,
    MapDataToPageElementsService
} from "../../services/utils";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {useDispatch, useSelector} from "react-redux";

export const TimeZone = (props) => {

    const timezoneList = getTimezoneList();

    const formStateTimezone = useSelector(state => state.formState.timezone);
    const [timezone, setTimezone] = useState(formStateTimezone || getCurrentTimezone());
    const [timezoneValidation, setTimezoneValidation] = useState("");

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



