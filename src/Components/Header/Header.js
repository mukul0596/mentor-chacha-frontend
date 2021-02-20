import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../Assets/Icons/user.png';
import logoutIcon from '../../Assets/Icons/logout.png';
import AuthService from '../../Services/AuthService';
import './Header.css';

const Header = (props) => {
    const logoutUser = () => {
        AuthService.logout().then(() => {
            window.location.reload();
        });
    }

    return (
        <div className='Header'>
            <div className='Title'>{props.children}</div>
            {
                (!props.isProfilePage)
                ? <Link to='/profile'>
                    <img src={userIcon} alt='Profile' />
                </Link>
                : <img src={logoutIcon} alt='Logout' onClick={logoutUser} />
            }
        </div>
    )
}

export default Header;