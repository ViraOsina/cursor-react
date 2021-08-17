import { useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom';
//import regulars from './regularExp';

import { Wrapper, Form, Icon, Title, Input, Label, Checkbox, Button } from './styles';
import icon from './padlock.svg';

export default function SignUp() {

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

    const [emailValid, setEmailValid] = useState('');
	const [passwordValid, setPasswordValid] = useState('');
	const [firstNameValid, setFirstNameValid] = useState('');
	const [lastNameValid, setLastNameValid] = useState('');

    const [formValid, setFormValid] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    const handleInputChange = e => {
        const prop = e.target.name;
        const value = e.target.value;
        //let isCorrect = null;

        switch (prop){
            case 'email': 
                setEmail(value);
                //isCorrect = regulars.email.test(value);
                //setEmailValid(isCorrect ? 'correct' : 'error');
                break;
            case 'password': 
                setPassword(value);
                //isCorrect = regulars.password.test(value);
                //setPasswordValid(isCorrect ? 'correct' : 'error');
                break;
            case 'firstName': 
                setFirstName(value);
                //isCorrect = regulars.firstName.test(value);
                //setFirstNameValid(isCorrect ? 'correct' : 'error');
                break;    
            case 'lastName': 
                setLastName(value);
                //isCorrect = regulars.lastName.test(value);
                //setLastNameValid(isCorrect ? 'correct' : 'error');
                break;    
            default: break;
        }
    }

    useEffect(() => {
        setFormValid(
            emailValid === 'correct' &&
            passwordValid === 'correct' &&
            firstNameValid === 'correct' &&
            lastNameValid === 'correct'
        );
    }, [emailValid, passwordValid, firstNameValid, lastNameValid]);


    const handleSignUp = e => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);

        if (formValid){
            setRegistered(!registered);
            setSignedIn(!signedIn);
        }
    }

    if (registered){
        localStorage.setItem('registered', registered);
        localStorage.setItem('signedIn', signedIn);
        return <Redirect to='/login/loggedin'/>
    }

    return (
        <Wrapper>
            <Form className='sign-up'>
                <div className="form-header">
                    <Icon>
                        <img className='icon-image' src={icon} alt="" />
                    </Icon>
                    <Title>Sign up</Title>
                </div>
                <div className="form-body">

                    <div className="input-group">
                        <Input 
                            value={firstName} 
                            onInput={handleInputChange} 
                            placeholder='First name *' 
                            type='text' 
                            name='firstName' 
                            valid={firstNameValid}
                        />
                        <Input 
                            value={lastName}
                            onInput={handleInputChange} 
                            placeholder='Last name *' 
                            type='text' 
                            name='lastName' 
                            valid={lastNameValid}
                        />
                    </div>
                    <Input 
                        value={email} 
                        onInput={handleInputChange} 
                        placeholder='Email Address *' 
                        type='email' 
                        name='email' 
                        valid={emailValid}
                    />
                    <Input 
                        value={password} 
                        onInput={handleInputChange} 
                        placeholder='Password *' 
                        type='password' 
                        name='password' 
                        valid={passwordValid}
                    />

                    <div className='form-check'>
                        <Checkbox type='checkbox' id='remember-me' />
                        <Label htmlFor='remember-me'>I want to receive inspiration, marketing promotions and updates via email</Label>
                    </div>
                </div>
                <div className="form-footer">
                    <Button onClick={handleSignUp} type='submit'>Sign up</Button>
                    <div className="form-redirect">
                        <Link className='redirect-link' to='/login/sign-in'>Already have an account? Sign in</Link>
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
}