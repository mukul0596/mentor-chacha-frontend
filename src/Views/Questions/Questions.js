import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Question from '../../Components/Question/Question';
import './Questions.css';

const Questions = (props) => {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/questionBank/${props.match.params.subject}/${props.match.params.topic}/question`, {
            credentials: 'include',
            headers: {
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setQuestions(data);
        });
    }, []);

    return (
        <div className='Questions'>
            <Header isProfilePage={false}>Questions</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        questions
                        ? questions.map(question => (
                            <Question question={question} />
                        ))
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Questions;