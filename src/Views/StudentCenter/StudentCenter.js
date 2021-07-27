import React, { useState, useEffect } from 'react';
import { Chart } from 'react-charts'
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import Tests from './Tests/Tests';
import './StudentCenter.css';

const StudentCenter = () => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [tests, setTests] = useState(null);
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/testResult/graphData`, {
            credentials: 'include',
            headers: {
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setTests(data.tests);

            const rankArr = [];
            const percentageArr = [];
            const accuracyArr = [];

            data.tests.map(test => {
                const date = `${(new Date(test.date)).getDate()} ${MONTHS[(new Date(test.date)).getMonth()]}`;
                const testResult = data.testResults.filter(testRes => testRes.testId === test._id)[0];
                rankArr.push([date, testResult.rank]);
                percentageArr.push([date, testResult.percentage]);
                accuracyArr.push([date, testResult.accuracy]);
            });

            setGraphData([rankArr, percentageArr, accuracyArr]);
        });
    }, []);
    
    return (
        <div className='Student-Center'>
            <Header isProfilePage={false}>Student Center</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {/* <Slider
                        autoPlay={false}
                        activeSlideDuration={3000}
                        interactionMode="swipe"
                        alignCaption="center"
                        alignIndicators="center"
                        indicatorsColor="#23374D"
                        useRightLeftTriangles={false}
                    >
                        <div>
                            <div className='Graph-Wrapper'>
                                {
                                    graphData 
                                    ? <Chart data={[
                                            {
                                                label: 'Rank',
                                                data: graphData[0]
                                            }
                                        ]} 
                                        axes={[
                                            { primary: true, type: 'ordinal', position: 'bottom' },
                                            { type: 'linear', position: 'left' }
                                        ]} 
                                        series={
                                            {
                                                showPoints: true
                                            }
                                        }
                                        tooltip 
                                    />
                                    : null
                                }
                            </div>
                        </div>

                        <div>
                            <div className='Graph-Wrapper'>
                                {
                                    graphData 
                                    ? <Chart data={[
                                            {
                                                label: 'Percentage',
                                                data: graphData[1]
                                            }
                                        ]} 
                                        axes={[
                                            { primary: true, type: 'ordinal', position: 'bottom' },
                                            { type: 'linear', position: 'left' }
                                        ]} 
                                        series={
                                            {
                                                showPoints: true
                                            }
                                        }
                                        tooltip 
                                    />
                                    : null
                                }
                            </div>
                        </div>

                        <div>
                            <div className='Graph-Wrapper'>
                                {
                                    graphData 
                                    ? <Chart data={[
                                            {
                                                label: 'Accuracy',
                                                data: graphData[2]
                                            }
                                        ]} 
                                        axes={[
                                            { primary: true, type: 'ordinal', position: 'bottom' },
                                            { type: 'linear', position: 'left' }
                                        ]} 
                                        series={
                                            {
                                                showPoints: true
                                            }
                                        }
                                        tooltip 
                                    />
                                    : null
                                }
                            </div>
                        </div>
                    </Slider> */}

                    <div className='Graph-Wrapper'>
                        {
                            graphData 
                            ? <Chart data={[
                                    {
                                        label: 'Rank',
                                        data: graphData[0]
                                    },
                                    {
                                        label: 'Percentage',
                                        data: graphData[1]
                                    },
                                    {
                                        label: 'Accuracy',
                                        data: graphData[2]
                                    }
                                ]} 
                                axes={[
                                    { primary: true, type: 'ordinal', position: 'bottom' },
                                    { type: 'linear', position: 'left' }
                                ]} 
                                series={
                                    {
                                        showPoints: true
                                    }
                                }
                                tooltip 
                            />
                            : null
                        }
                    </div>

                    {
                        tests
                        ? <Tests tests={tests} />
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default StudentCenter;