import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../../services/constants";
import {MapDataToPageElementsService} from "../../services/utils";

export const UserInfo = (props) => {
    const formStateFirstName = useSelector(state => state.formState.firstName);
    const formStateLastName = useSelector(state => state.formState.lastName);
    const formStateGender = useSelector(state => state.formState.gender);
    const [firstName, setFirstName] = useState(formStateFirstName);
    const [lastName, setLastName] = useState(formStateLastName);
    const [gender, setGender] = useState(formStateGender);
    const [firstNameValidation, setFirstNameValidation] = useState("");
    const [lastNameValidation, setLastNameValidation] = useState("");
    const dispatch = useDispatch();
    const checkRequiredField = (field) => {
        return field.length ? "" : "Field is required"
    };
    const goToNextStep = () => {
        const firstNameError = checkRequiredField(firstName);
        const lastNameError = checkRequiredField(lastName);
        setFirstNameValidation(firstNameError);
        setLastNameValidation(lastNameError);
        if(!firstNameError.length && !lastNameError.length) {
            dispatch({type: "SAVE_USER_INFO", payload: {firstName, lastName, gender}});
            props.history.push('/company');
        }
    };
    const pageFields = [
        {
            id: 0,
            element: 'title',
            text: 'USER INFO',
            className: ''
        }, createAccount, {
            id: 2,
            element: 'progress'
        }, {
            id: 3,
            element: 'input',
            name: 'firstName',
            type: 'text',
            placeholder: 'First Name',
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
            type: 'text',
            placeholder: 'Last Name',
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
            options: [{
                name: "Male"
            }, {
                name: "Female"
            }],
            className: '',
            value: gender,
            onChange: (event) => {
                setGender(event.target.value)
            }
        }, {
            id: 6,
            path: '/email',
            element: 'link',
            name: 'PREV STEP',
            className: 'btn btn-danger'
        }, {
            id: 7,
            element: 'button',
            onClick: () => goToNextStep(),
            name: 'NEXT STEP',
            className: 'btn btn-danger'
        }
    ];

    let result = MapDataToPageElementsService.getElementFormService(pageFields);
    return (
        <div>
            {result}
        </div>
    )
};


