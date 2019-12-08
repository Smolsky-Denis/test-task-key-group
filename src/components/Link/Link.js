import React from 'react';
import {NavLink} from "react-router-dom"
import {Button} from "../Button/Button";

export const Link = (props) => {
    let {path} = props.data;
    return (
        <div>
            <NavLink to={path}>
                <Button data={props.data}/>
            </NavLink>
        </div>
    )
};
