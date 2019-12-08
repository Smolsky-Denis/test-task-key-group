import React from 'react';
import {useDispatch} from "react-redux";
import {checkRequiredField, MapDataToPageElementsService} from "../../services/utils";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {useUserInfo} from "./useUserInfo";

export const UserInfo = (props) => {

    const {
        genderList,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        gender,
        setGender,
        firstNameValidation,
        setFirstNameValidation,
        lastNameValidation,
        setLastNameValidation,
        genderValidation,
        setGenderValidation
    } = useUserInfo();

    const dispatch = useDispatch();

    const goToNextStep = () => {
        const firstNameError = checkRequiredField(firstName);
        const lastNameError = checkRequiredField(lastName);
        const genderError = checkRequiredField(gender);
        setFirstNameValidation(firstNameError);
        setLastNameValidation(lastNameError);
        setGenderValidation(genderError);
        if (!firstNameError.length && !lastNameError.length && !genderError.length) {
            dispatch({type: "SAVE_USER_INFO", payload: {firstName, lastName, gender}});
            props.history.push('/company');
        }
    };
    const pageFields = [
        {
            id: 0,
            element: 'formHeader',
            text:
                <span>Let's introduce ourselves!<br/> Your name will be displayed in all reports, documents, etc.</span>,
            progress: 40
        }, {
            id: 3,
            element: 'input',
            name: 'firstName',
            placeholder: 'First Name',
            type: 'text',
            className: '',
            value: firstName,
            onChange: (event) => {
                setFirstName(event.target.value)
            },
            validation: firstNameValidation
        }, {
            id: 4,
            element: 'input',
            name: 'lastName',
            placeholder: 'Last Name',
            type: 'text',
            className: '',
            value: lastName,
            onChange: (event) => {
                setLastName(event.target.value)
            },
            validation: lastNameValidation
        }, {
            id: 5,
            element: 'select',
            name: 'gender',
            placeholder: 'Gender',
            options: genderList,
            value: gender,
            onChange: (event) => {
                setGender(event.target.value)
            },
            validation: genderValidation
        },
    ];
    const prevStep = {
        path: '/email',
        color: 'btn-outline',
        name: '< PREV STEP'
    }, nextSep = {
        onClick: () => goToNextStep(),
        color: 'btn-pink',
        name: 'NEXT STEP >'
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


