import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    checkRequiredField,
    getCurrentTimezone,
    getGenderList,
    getTimezoneList,
    MapDataToPageElementsService
} from "../../services/utils";
import {Button} from "../../components/Button/Button";
import style from './CreateAccount.module.css'
import {verifyEmail} from "../../actions/emailActions";


export const CreateAccount = (props) => {

    const timezoneList = getTimezoneList();
    const genderList = getGenderList();

    const formStateTimezone = useSelector(state => state.formState.timezone);
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
    const [timezone, setTimezone] = useState(formStateTimezone || getCurrentTimezone());

    const [emailValidation, setEmailValidation] = useState("");
    const [firstNameValidation, setFirstNameValidation] = useState("");
    const [lastNameValidation, setLastNameValidation] = useState("");
    const [genderValidation, setGenderValidation] = useState("");
    const [timezoneValidation, setTimezoneValidation] = useState("");

    const dispatch = useDispatch();

    const pageFields = [
        {
            id: 0,
            element: 'formHeader',
            text: <span>Check your data</span>,
            progress: 100
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
            placeholder: 'Gender',
            name: 'gender',
            options: genderList,
            className: '',
            value: gender,
            onChange: (event) => {
                setGender(event.target.value)
            },
            validation: genderValidation
        }, {
            id: 7,
            element: 'input',
            name: 'company',
            type: 'text',
            placeholder: 'Company Name(optional)',
            value: company,
            onChange: (event) => {
                setCompany(event.target.value)
            },
            className: ''
        }, {
            id: 8,
            element: 'select',
            name: 'timeZone',
            type: 'text',
            placeholder: 'Select your timezone',
            value: timezone,
            options: timezoneList,
            onChange: (event) => {
                setTimezone(event.target.value)
            },
            validation: timezoneValidation
        }

    ];

    const finish = () => {
        const firstNameError = checkRequiredField(firstName);
        const lastNameError = checkRequiredField(lastName);
        const genderError = checkRequiredField(gender);
        const timezoneError = checkRequiredField(timezone);

        setFirstNameValidation(firstNameError);
        setLastNameValidation(lastNameError);
        setGenderValidation(genderError);
        setTimezoneValidation(timezoneError);

        verifyEmail(JSON.stringify({email})).then((result) => {
            if (result.status === 200) {
                if(!firstNameError.length && !lastNameError.length && !genderError.length && !timezoneError.length){
                    setEmailValidation("");
                    dispatch({type: "SAVE_ALL", payload : {
                            email, firstName, lastName, gender, company, timezone
                        }});
                    props.history.push('/congratulations');
                }
            } else {
                setEmailValidation(result.email.join(". "))
            }
        });
    };

    const button = {
        className: 'form-control-lg',
        classButton: style.fullWidth,
        onClick: () => finish(),
        name: 'Create account'
    };
    const title = {
      text: <span>Check your data</span>
    };

    const result = MapDataToPageElementsService.getElementFormService(pageFields);
    return (
        <div>
            <div>

            </div>
            {result}
            <Button data={button}/>
        </div>
    )
};



