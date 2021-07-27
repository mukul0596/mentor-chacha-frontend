import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import './Notification.css';

const Notification = (props) => {
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/notification/${props.match.params.id}`, {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setNotification(data);
        });
    }, [])

    return (
        <div className='Notification'>
            <Header isProfilePage={false}>Notification</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        notification
                        ? <>
                            <div className='Notification-Title'>{notification.title}</div>
                            <div className='Notification-Description' dangerouslySetInnerHTML={{__html: notification.description}} />
                        </>
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Notification;