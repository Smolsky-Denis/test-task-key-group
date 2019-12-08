import React from 'react';
import {Title} from "../../components/Title/Title";
import style from './Congratulations.module.css'
import {Link} from "../../components/Link/Link";

export const Congratulations = (props) => {
    const message = {
        text: <span>Congratulations. <br/>
        Your account has been created.</span>,
        // className: style.flexRowCenter
    }, linkToStart = {
        name: 'Redirect to start',
        path: '/email'
    };
    return (
        <div className={style.flexColumnCenter}>
                <Title data={message}/>
            <Link data={linkToStart}/>
        </div>

    )
};
