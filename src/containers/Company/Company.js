import React, {useState} from 'react';
import {createAccount} from "../../services/constants";
import {MapDataToPageElementsService} from "../../services/utils";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "../../components/Link/Link";
import {Button} from "../../components/Button/Button";


export const Company = (props) => {
    const formStateCompany = useSelector(state => state.formState.company);
    const [company, setCompany] = useState(formStateCompany);
    const dispatch = useDispatch();

    const goToNextStep = () => {
        dispatch({type: 'SAVE_COMPANY', company});
        props.history.push('/time-zone');
    };
    const pageFields = [
        {
            id: 0,
            element: 'title',
            text: 'Company',
            className: ''
        }, createAccount, {
            id: 2,
            element: 'progress',
            progress: 60
        }, {
            id: 3,
            element: 'input',
            name: 'company',
            type: 'text',
            placeholder: 'Company Name(optional)',
            className: '',
            value: company,
            onChange: (event) => {
                setCompany(event.target.value)
            }
        }
    ];
    const prevStep = {
            path: '/user-info',
            name: 'PREV STEP'
        },
        nextSep = {
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

