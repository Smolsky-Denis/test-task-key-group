import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import {EmailView} from "./containers/Email/EmailView";
import {UserInfo} from "./containers/UsetInfo/UsetInfo";
import {Company} from "./containers/Company/Company";
import {TimeZone} from "./containers/TimeZone/TimeZone";
import {CreateAccount} from "./containers/CreateAccount/CreateAccount";
import {Congratulations} from "./containers/Congratulations/Congratulations";


export const App = () => {
  return (
    <div className='container'>
        <Switch>
            <Route exact path='/' render={() => <Redirect from="/" to="/email"/>}/>
            <Route exact path="/email" render={props => (<EmailView {...props}/>)}/>
            <Route exact path="/user-info" render={props => (<UserInfo {...props}/>)}/>
            <Route exact path="/company" render={props => (<Company {...props}/>)}/>
            <Route exact path="/time-zone" render={props => (<TimeZone {...props}/>)}/>
            <Route exact path="/create-account" render={props => (<CreateAccount {...props}/>)}/>
            <Route exact path="/congratulations" render={props => (<Congratulations {...props}/>)}/>
        </Switch>
    </div>
  );
};

