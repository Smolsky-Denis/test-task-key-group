import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../../services/constants";
import {MapDataToPageElementsService} from "../../services/utils";
import {Button} from "../../components/Button/Button";


export const CreateAccount = (props) => {
    const formStateEmail = useSelector(state => state.formState.email);
    const formStateFirstName = useSelector(state => state.formState.firstName);
    const formStateLastName = useSelector(state => state.formState.lastName);
    const formStateGender = useSelector(state => state.formState.gender);
    const formStateCompany = useSelector(state => state.formState.company);

    const [email, setEmail] = useState(formStateEmail);
    const [firstName, setFirstName] = useState(formStateFirstName);
    const [lastName, setLastName] = useState(formStateLastName);
    const [gender, setGender] = useState(formStateGender);
    const [company, setCompany] = useState(formStateCompany);

    const [emailValidation, setEmailValidation] = useState("");
    const [firstNameValidation, setFirstNameValidation] = useState("");
    const [lastNameValidation, setLastNameValidation] = useState("");

    const dispatch = useDispatch();

    const checkRequiredField = (field) => {
        return field.length ? "" : "Field is required"
    };

    const pageFields = [
        {
            id: 0,
            element: 'title',
            text: 'Company',
            className: ''
        }, createAccount, {
            id: 2,
            element: 'progress'
        }, {
            id: 3,
            element: 'input',
            name: 'email',
            type: 'email',
            value: email,
            onChange: (event) => {
                setEmail(event.target.value)
            },
            placeholder: 'E-mail',
            placeholder: 'E-mail',
            className: '',
            validation: emailValidation
        }, {
            id: 4,
            element: 'input',
            name: 'firstName',
            value: firstName,
            onChange: (event) => {
                setFirstName(event.target.value)
            },
            validation: firstNameValidation,
            type: 'text',
            placeholder: 'First Name',
            placeholder: 'First Name',
            className: ''
        }, {
            id: 5,
            element: 'input',
            name: 'lastName',
            value: lastName,
            onChange: (event) => {
                setLastName(event.target.value)
            },
            validation: lastNameValidation,
            type: 'text',
            placeholder: 'Last Name',
            className: ''
        }, {
            id: 6,
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
            id: 7,
            element: 'input',
            name: 'company',
            type: 'text',
            placeholder: 'Company Name(optional)',
            value: company,
            onChange: (event)=> {
                setCompany(event.target.value)
            },
            className: ''
        }, {
            id: 8,
            element: 'select',
            name: 'timeZone',
            options: [{
                name: "Minsk"
            }],
            type: 'text',
            placeholder: 'Select your timezone',
            className: ''
        }, {
            id: 9,
            path: '/email',
            element: 'link',
            name: 'PREV STEP',
            className: 'btn btn-danger'
        },

    ];
const button = {
    onClick: () => {},
    name: 'Create account',
    className: 'btn btn-danger'
}
    let result = MapDataToPageElementsService.getElementFormService(pageFields);
    return (
        <div>
            {result}
            <div>
                <Button data={button}/>
            </div>
        </div>
    )
};



