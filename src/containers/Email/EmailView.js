import React from 'react';
import stile from './EmailView.module.css'
import {MapDataToPageElementsService} from "../../services/utils";
import {useDispatch} from "react-redux";
import {verifyEmail} from "../../actions/emailActions";
import {Button} from "../../components/Button/Button";
import {useEmailViewConfig} from "./useEmailViewConfig";


export const EmailView = (props) => {
    const {email, setEmail, emailValidation, setEmailValidation} = useEmailViewConfig();
    const dispatch = useDispatch();
    const goToNextStep = () => {
        verifyEmail(JSON.stringify({email})).then((result) => {
            if (result.status === 200) {
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
            element: 'formHeader',
            text: <span>Create your VINchain account.<br/> Easy to use anytime, anywhere for everyone</span>,
            progress: 20
        }, {
            id: 1,
            element: 'input',
            name: 'email',
            placeholder: 'E-mail',
            type: 'email',
            value: email,
            onChange: (event) => {
                setEmail(event.target.value)
            },
            validation: emailValidation
        }
    ];
    const button = {
        path: '/user-info',
        color: 'btn-pink',
        onClick: () => goToNextStep(),
        name: 'NEXT STEP >'
    };
    let result = MapDataToPageElementsService.getElementFormService(pageFields);
    return (
        <div>
            {result}
            <div className={stile.emailButtonEnd}>
                <Button data={button}/>
            </div>
        </div>
    )
};
