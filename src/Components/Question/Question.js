import React from 'react';

import './Question.css';

const Question = (props) => (
    <div className='Question-Card'>
        <div className='Question'>{props.question.question}</div>
        {
            props.question.type === 'NumericalValue'
            ? <input type='text' value={props.defaultValue ?? null} disabled />
            : props.question.type === 'MCQ'
            ? props.question.options.map((option) => (
                <div key={option} className='Row'>
                    <input type='radio' disabled />
                    <label>{option}</label>
                </div>
            ))
            : props.question.options.map((option) => (
                <div key={option} className='Row'>
                    <input type='checkbox' disabled />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))
        }
    </div>
)

export default Question;