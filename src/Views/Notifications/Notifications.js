import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { AuthContext } from '../../Context/AuthContext';
import './Notifications.css';

const Notifications = (props) => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const { user } = useContext(AuthContext);

    const [notifications, setNotifications] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/notification/titles', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setNotifications(data);
        });
    }, [])

    return (
        <div className='Notifications'>
            <Header isProfilePage={false}>Notifications</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        notifications
                        ? notifications.map(notification => (
                            <Link to={`${props.location.pathname}/${notification._id}`} key={notification._id} className={(notification.readBy.includes(user._id)) ? 'Notification-Title Read' : 'Notification-Title'}>
                                {notification.title}
                                <div className='Time'>
                                    {
                                        `${(new Date(notification.createdAt)).getHours()}:
                                        ${(new Date(notification.createdAt)).getMinutes()},  
                                        ${DAYS[(new Date(notification.createdAt)).getDay()]},  
                                        ${(new Date(notification.createdAt)).getDate()} 
                                        ${MONTHS[(new Date(notification.createdAt)).getMonth()]}`
                                    }
                                </div>
                            </Link>
                        ))
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications;