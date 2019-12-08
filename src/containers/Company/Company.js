import React from 'react';
import {MapDataToPageElementsService} from "../../services/utils";
import {useDispatch} from "react-redux";
import {Link} from "../../components/Link/Link";
import {Button} from "../../components/Button/Button";
import {useCompanyConfig} from "./useCompanyConfig";


export const Company = (props) => {
    const {company, setCompany} = useCompanyConfig();
    const dispatch = useDispatch();

    const goToNextStep = () => {
        dispatch({type: 'SAVE_COMPANY', company});
        props.history.push('/time-zone');
    };
    const pageFields = [
        {
            id: 0,
            element: 'formHeader',
            text: <span>Tracking company vehicles? (optional)</span>,
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
            color: 'btn-outline',
            name: '< PREV STEP'
        },
        nextSep = {
            onClick: () => goToNextStep(),
            name: company && company.length ? 'NEXT STEP >' : "SKIP THIS STEP >",
            color: 'btn-pink',
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


