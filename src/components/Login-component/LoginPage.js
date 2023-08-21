import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { LogActions } from '../Commons/store/Store';

import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmailTouched, setUserEmailTouched] = useState(false);
    const [userPasswordTouched, setUserPasswordTouched] = useState(false);

    const enteredEmailIsValid = userEmail.trim() !== '';
    const emailIsInValid = !enteredEmailIsValid && userEmailTouched
    const enteredPasswordIsValid = userPassword.trim() !== '';
    const passwordIsInValid = !enteredPasswordIsValid && userPasswordTouched;

    let formIsInValid = emailIsInValid || passwordIsInValid ; 

    const emailInputChangeHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const emailInputBlurHandler = event => {
        setUserEmailTouched(true);
      };

    const passwordInputChangeHandler = (event) => {
        setUserPassword(event.target.value);
    };

    const passwordInputBlurHandler = event => {
        setUserPasswordTouched(true);
      };
    
    const submitLoginFormHandler = (event) => {
        event.preventDefault();
        setUserEmailTouched(true);
        setUserPasswordTouched(true);

        if (!enteredEmailIsValid || !enteredPasswordIsValid) {
            return;
        }
        setUserEmail('');
        setUserPassword('');
        setUserEmailTouched(false);
        setUserPasswordTouched(false);
        
        dispatch(LogActions.login());
        navigate('/home');
    }

    return (
        <>
            <div className='Login-component'>
                <div className='login-form '>
                    <form onSubmit={submitLoginFormHandler}>
                        <div className='m-3 form-group'>
                            <label className='input-label' htmlFor='user-email'>
                                Email
                            </label>
                            <input onChange={emailInputChangeHandler} className='form-control'
                                onBlur={emailInputBlurHandler} value={userEmail} type='email' id='user-email'>
                            </input>
                            {emailIsInValid && (
                                <p className='error-text'>*Email must not be empty.</p>
                            )}
                        </div>
                        <div className='m-3 form-group'>
                            <label className='input-label' htmlFor='password'>
                                Password
                            </label>
                            <input onChange={passwordInputChangeHandler} className='form-control'
                                onBlur={passwordInputBlurHandler} type='password' id='password'>
                            </input>
                            {passwordIsInValid && (
                                <p className='error-text'>*Password must not be empty.</p>
                            )}
                        </div>
                        <div className='btn-wrapper m-1'>
                            <button disabled={formIsInValid} className='nav-btn' type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default LoginPage;