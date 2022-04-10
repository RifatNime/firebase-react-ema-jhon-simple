import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { MutatingDots } from 'react-loader-spinner';


const Login = () => {

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    /*  */
    if (user) {
        navigate('/shop');
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='from-title'>Login</h1>
                <form action="" onSubmit={handleUserSignIn}>

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
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    
                    {
                        loading &&  <MutatingDots style={{margin: "0 auto"}} height="100" width="110" color='orange' ariaLabel='loading' secondaryColor="#0ead69"/>
                    }
                    <input className='form-submit' id="" type='submit' value="Login" />
                </form>
                <p>
                    New to Ema-Jhon? <Link className='from-link' to="/signup">Create an account</Link>
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

export default Login;