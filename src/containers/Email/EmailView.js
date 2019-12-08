import React, {useState} from 'react';
import {createAccount} from "../../services/constants";
import {ProgressLine} from "../../components/ProgressLine/ProgressLine";
import {MapDataToPageElementsService} from "../../services/utils";
import {useDispatch, useSelector} from "react-redux";
import {verifyEmail} from "../../actions/emailActions";


export const EmailView = (props) => {
    const formStateEmail = useSelector(state => state.formState.email);
    const [email, setEmail] = useState(formStateEmail);
    const [emailValidation, setEmailValidation] = useState("");
    const dispatch = useDispatch();
    const goToNextStep = () => {
        verifyEmail(JSON.stringify({email})).then((result) => {
            if(result.status === 200) {
                setEmailValidation("");
                dispatch({type: "SAVE_EMAIL", email});
                props.history.push('/user-info');
            } else {
                setEmailValidation(result.email.join(". "))
            }
        });
    };

    const pageFields = [
        {
            id: 0,
            element: 'title',
            text: 'title EMAIL',
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
            className: '',
            validation: emailValidation
        }, {
            id: 5,
            path: '/user-info',
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
