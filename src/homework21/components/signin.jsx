import { useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom';
//import regulars from './regularExp';
import { Wrapper, Form, Icon, Title, Input, Label, Checkbox, Button, ErrorMessage } from './styles';
import icon from './padlock.svg';

export default function SignIn() {

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [emailValid, setEmailValid] = useState('');
	const [passwordValid, setPasswordValid] = useState('');

    const [isError, setIsError] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const [signedIn, setSignedIn] = useState(false);

    const handleInputChange = e => {
        const prop = e.target.name;
        const value = e.target.value;
        const checked = e.target.checked;
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
            case 'rememberMe': 
                setRememberMe(checked);
                break;
            default: break;
        }
    }

    const handleSignUp = e => {
        localStorage.removeItem('firstName')
		localStorage.removeItem('lastName')
		localStorage.removeItem('email')
		localStorage.removeItem('password')
		localStorage.removeItem('status')
		localStorage.removeItem('signedIn')
		localStorage.removeItem('rememberMe')
    }

    const handleSignIn = e => {
        if (!isError){
           localStorage.setItem('rememberMe', rememberMe);
           setSignedIn(true);
        }
        else{
            setDisplayError(true);
            setEmail('');
			setPassword('');
			setRememberMe(false);
			setEmailValid('');
			setPasswordValid('');
        }
    }

    useEffect(() => {
        const userEmail = localStorage.getItem('email');
        const userPass = localStorage.getItem('password');

        setIsError(userEmail !== email || userPass !== password);
    }, [email, password]);


    useEffect(() => {
		const isRemembered = JSON.parse(localStorage.getItem('rememberMe'))

		if (isRemembered === true) {
			setRememberMe(isRemembered)
			setEmail(localStorage.getItem('email'))
			setPassword(localStorage.getItem('password'))
		}
	}, []);

    const authorized = JSON.parse(localStorage.getItem('signedIn'))

	if (authorized) {
		return <Redirect to="/login/loggedin" />
	}
	if (signedIn) {
		localStorage.setItem('signedIn', signedIn)
		return <Redirect to="/login/loggedin" />
	}

    return (
        <Wrapper>
            <Form className='sign-in'>
                <div className="form-header">
                    <Icon>
                        <img className='icon-image' src={icon} alt="" />
                    </Icon>
                    <Title>Sign in</Title>
                </div>
                <div className="form-body">
                    <ErrorMessage show={displayError}>Incorrect password or email. Try again</ErrorMessage>
                    <Input 
                        onInput={handleInputChange} 
                        value={email}
                        placeholder='Email Address *' 
                        type='email' 
                        name='email' 
                        valid={emailValid}
                    />
                    <Input 
                        onInput={handleInputChange} 
                        value={password}
                        placeholder='Password *' 
                        type='password' 
                        name='password' 
                        valid={passwordValid}
                    />

                    <div className='form-check'>
                        <Checkbox 
                            checked={rememberMe}
                            onChange={handleInputChange}
                            name='rememberMe' 
                            type='checkbox'
                            id='remember-me' 
                        />
                        <Label htmlFor='remember-me'>Remember me</Label>
                    </div>
                </div>
                <div className="form-footer">
                    <Button onClick={handleSignIn} type='submit'>Sign in</Button>
                    <div className="form-redirect">
                        <Link className='redirect-link' to=''>Forgot password?</Link>
                        <Link onClick={handleSignUp} className='redirect-link' to='/login/sign-up'>Don't have an account? Sign up</Link>
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
}