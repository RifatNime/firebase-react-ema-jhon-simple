
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SignUp.css';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    

    const togglePassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    /*  */

    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
          alert('Sent email');
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='from-title'>SignUp</h1>
                <form onSubmit={handleCreateUser}>

                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>

                        <div style={{ position: 'relative', display: 'flex' }}>

                            <input onBlur={handlePasswordBlur} type={passwordShown ? "text" : "password"} name="password" id="" placeholder='Enter password here' required />

                            <FontAwesomeIcon style={{ position: 'absolute', top: "38%", right: "5%" }} onClick={togglePassword} icon={passwordShown ? faEye : faEyeSlash}></FontAwesomeIcon>

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>

                        <div style={{ position: 'relative', display: 'flex' }}>

                            <input onBlur={handleConfirmPasswordBlur} type={passwordShown ? "text" : "password"} name="confirm-password" id="" placeholder='Confirm password' required />

                            <FontAwesomeIcon style={{ position: 'absolute', top: "38%", right: "5%" }} onClick={togglePassword} icon={passwordShown ? faEye : faEyeSlash}></FontAwesomeIcon>

                        </div>
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' id="" type='submit' value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='from-link' to="/login">Login</Link>
                </p>
                <div className="input-group-line">
                    <div className='b1'></div>
                    <div className='b2'>
                        <small className='b21'>or</small>
                    </div>
                    <div className='b1'></div>

                </div>
            </div>
        </div >
    );
};

export default SignUp;