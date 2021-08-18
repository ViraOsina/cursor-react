import React from 'react';
import './components/fonts.css';
//npm install --save styled-components
import { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Loggedin from './components/loggedin';
import SignIn from './components/signin';
import SignUp from './components/signup';
import { Wrapper } from './components/styles';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: rgb(182,204,177);
  }`;

export default function Login () {

    return (
        <Wrapper>
        <GlobalStyle /> 
            <Switch>

                <Route exact path="/login" component={SignIn} />
                <Route path="/login/sign-up" component={SignUp} />
                <Route path="/login/loggedin" component={Loggedin} />
        
            </Switch>
        </Wrapper>
    )
}