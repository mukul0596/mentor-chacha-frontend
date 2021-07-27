import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Accordion from '../../Components/Accordion/Accordion';

const QuestionBank = (props) => {
    const [questionBanks, setQuestionBanks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/questionBank/topics', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setQuestionBanks(data);
        });
    }, []);

    return (
        <div className='Question-Bank'>
            <Header isProfilePage={false}>Question Bank</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        questionBanks
                        ? Object.keys(questionBanks).map(subject => (
                            questionBanks[subject].length
                            ? <Accordion key={subject} title={subject}>
                                {
                                    questionBanks[subject].map(topic => (
                                        <Link key={topic} to={`${props.location.pathname}/${subject}/${topic}`}>{topic}</Link>
                                    ))
                                }
                            </Accordion>
                            : null
                        ))
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default QuestionBank;