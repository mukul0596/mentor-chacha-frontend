import React from 'react';
import { Link } from 'react-router-dom';
import './Tests.css';

const Tests = (props) => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='Tests'>
            {
                props.tests.map(test => (
                    <Link className='Test' key={test._id} to={`${window.location.pathname}/${test._id}`}>
                        <div className='Row'>
                            <div className='Title'>{test.title}</div>
                            <div className='Date'>
                                {
                                    `${DAYS[(new Date(test.date)).getDay()]}, 
                                    ${(new Date(test.date)).getDate()} 
                                    ${MONTHS[(new Date(test.date)).getMonth()]}, 
                                    ${(new Date(test.date)).getFullYear()}`
                                }
                            </div>
                        </div>
                        <div className='Row'>
                            <div className='Column-Wrapper'>
                                <div className='Label'>Class:</div>
                                <div className='Class'>{test.class}</div>
                            </div>
                            <div className='Column-Wrapper'>
                                <div className='Label'>Stream:</div>
                                <div className='Stream'>{test.for}</div>
                            </div>
                            <div className='Column-Wrapper'>
                                <div className='Label'>Pattern:</div>
                                <div className='Pattern'>{test.pattern}</div>
                            </div>
                        </div>
                        <div className='Row-Wrapper'>
                            <div className='Label'>Subjects:</div>
                            <div className='Subjects'>
                                {test.subjects.map(subject => <span key={subject}>{subject}</span>)}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Tests;