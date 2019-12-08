import React from 'react';
import {Title} from "../../components/Title/Title";
import style from './Congratulations.module.css'
import {Button} from "../../components/Button/Button";
import {useDispatch} from "react-redux";

export const Congratulations = (props) => {
    const dispatch = useDispatch();

    const message = {
        text: <span>Congratulations. <br/>
        Your account has been created.</span>,
    }, btn = {
        name: 'Redirect to start',
        onClick: () => {
            dispatch({type: 'CLEAR_ALL'});
            props.history.push('/email');
        }
    };

    return (
        <div className={style.flexColumnCenter}>
            <Title data={message}/>
            <Button data={btn}/>
        </div>

    )
};
