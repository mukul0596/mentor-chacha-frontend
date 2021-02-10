import React, { useContext, useEffect, useState } from 'react';
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';
import logo from '../../Assets/logo.jpg';
import phoneIcon from '../../Assets/Icons/phone.png';
import lockIcon from '../../Assets/Icons/lock.png';
import './Login.css';


const Login = (props) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (authContext.isAuthenticated) 
            props.history.push('/');
    });

    const loginUser = (e) => {
        e.preventDefault();
        AuthService.login ({ phone, password }).then(data => {
            const {isAuthenticated, user, message} = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/')
            } else 
                setMessage(message);
        })
    }

    return (
        <div className='Login'>
            <div className='Cover'>
                <img src={logo} alt='LOGO' />
                <div className='Title'>Mentor <span>Chacha</span></div>
            </div>

            <form onSubmit={loginUser}>
                <div className='Form-Field-Wrapper'>
                    <img src={phoneIcon} alt='PHONE_ICON' />
                    <input type='text' name='phone' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>
                <div className='Form-Field-Wrapper'>
                    <img src={lockIcon} alt='LOCK_ICON' />
                    <input type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className='Forgot-Password-Container'>
                    <span>Forgot Password?</span>
                </div>
                <button>Login</button>
            </form>

            <div>
                { message.msgBody }
            </div>
        </div>
    )
}

export default Login;