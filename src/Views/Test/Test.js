import React, { useState, useEffect } from 'react';
import './Test.css';

const Test = (props) => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const subjectAnalysisFields = [
        {
            field: 'totalMarks',
            text: 'Total Marks'
        },
        {
            field: 'marks',
            text: 'Marks'
        },
        {
            field: 'negativeMarks',
            text: 'Negative Marks'
        },
        {
            field: 'attempted',
            text: 'Attempted'
        },
        {
            field: 'unattempted',
            text: 'Unattempted'
        },
        {
            field: 'totalQuestions',
            text: 'Total Questions'
        },
        {
            field: 'correct',
            text: 'Correct'
        },
        {
            field: 'incorrect',
            text: 'Incorrect'
        },
        {
            field: 'accuracy',
            text: 'Accuracy'
        },
        {
            field: 'average',
            text: 'Average'
        },
        {
            field: 'highestMarks',
            text: 'Highest Marks'
        }
    ]

    const [test, setTest] = useState(null);
    const [testResult, setTestResult] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/test/${props.match.params.testId}`, {
            credentials: 'include',
            headers: {
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setTest(data);
        });

        fetch(`http://localhost:5000/api/testResult/${props.match.params.testId}`, {
            credentials: 'include',
            headers: {
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setTestResult(data);
        });
    }, []);

    return (
        <div className='Test'>
            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        test && testResult
                        ? <>
                            <div className='Row-Vertical'>
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

                            <div className='Row-Vertical'>
                                <div className='Card'>
                                    <div className='Title'>Rank</div>
                                    <div className='Value'>{testResult.rank}</div>
                                </div>
                                <div className='Card'>
                                    <div className='Title'>Marks</div>
                                    <div className='Value'>{testResult.marks}/{testResult.totalMarks}</div>
                                </div>
                                <div className='Card'>
                                    <div className='Title'>Percentage</div>
                                    <div className='Value'>{testResult.percentage.toFixed(2)}%</div>
                                </div>
                            </div>

                            <div className='Row-Horizontal'>
                                <div className='Row'>
                                    <div className='Title'>Batch: </div>
                                    <div className='Value'>{test.class} - {test.for}</div>
                                </div>
                                <div className='Row'>
                                    <div className='Title'>Pattern: </div>
                                    <div className='Value'>{test.pattern}</div>
                                </div>
                                <div className='Row'>
                                    <div className='Title'>Students Appeared: </div>
                                    <div className='Value'>{testResult.totalStudents}</div>
                                </div>
                            </div>

                            <div className='Row-Vertical Two'>
                                <div className='Card'>
                                    <div className='Title'>Average Marks</div>
                                    <div className='Value'>{testResult.average.toFixed(2)}</div>
                                </div>
                                <div className='Card'>
                                    <div className='Title'>Highest Marks</div>
                                    <div className='Value'>{testResult.highestMarks}</div>
                                </div>
                            </div>

                            <div className='Row-Vertical Two'>
                                <div className='Card'>
                                    <div className='Title'>Answer</div>
                                    <div className='Row-Vertical Two'>
                                        <div className='Card'>
                                            <div className='Title'>Correct</div>
                                            <div className='Value'>{testResult.correct}</div>
                                        </div>
                                        <div className='Card'>
                                            <div className='Title'>Incorrect</div>
                                            <div className='Value'>{testResult.incorrect}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='Card'>
                                    <div className='Title'>Marks</div>
                                    <div className='Row-Vertical Two'>
                                        <div className='Card'>
                                            <div className='Title'>Right</div>
                                            <div className='Value'>{testResult.marks - testResult.negativeMarks}</div>
                                        </div>
                                        <div className='Card'>
                                            <div className='Title'>Negative</div>
                                            <div className='Value'>{testResult.negativeMarks}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='Row-Horizontal'>
                                <div className='Title'>Questions</div>

                                <div className='Row-Vertical'>
                                    <div className='Card'>
                                        <div className='Title'>Total</div>
                                        <div className='Value'>{testResult.totalQuestions}</div>
                                    </div>
                                    <div className='Card'>
                                        <div className='Title'>Attempted</div>
                                        <div className='Value'>{testResult.attempted}</div>
                                    </div>
                                    <div className='Card'>
                                        <div className='Title'>Unattempted</div>
                                        <div className='Value'>{testResult.unattempted}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='Card Direct'>
                                <div className='Title'>Subject Analysis</div>

                                <table cellSpacing={0} cellPadding={0}>
                                    <thead>
                                        <tr>
                                            <td>Analysis</td>
                                            {
                                                testResult.subjectStats.map(subjectStat => (
                                                    <td key={subjectStat.subject}>{subjectStat.subject}</td>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            subjectAnalysisFields.map(subjectAnalysisField => (
                                                <tr key={subjectAnalysisField.field}>
                                                    <td>{subjectAnalysisField.text}</td>
                                                    {
                                                        testResult.subjectStats.map((subjectStat, i) => (
                                                            <td key={i}>{subjectStat[subjectAnalysisField.field].toFixed(2)}</td>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Test;