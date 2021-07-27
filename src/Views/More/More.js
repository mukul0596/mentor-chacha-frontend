import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import arrowRight from '../../Assets/Icons/circled-right.png';
import './More.css';

const MORE_ITEMS = [
    {
        link: '/recommendation',
        text: 'Recommendation'
    },
    {
        link: '/blogs&faqs',
        text: 'Blogs & FAQs'
    },
    {
        link: '/mockTest',
        text: 'Mock Test'
    },
    {
        link: '/contactUs',
        text: 'Contact Us'
    }
]

const More = () => {
    return (
        <div className='More Page'>
            <Header isProfilePage={false}>More</Header>
            
            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        MORE_ITEMS.map(item => (
                            <Link key={item.link} to={item.link} className='More-Item'>
                                <span>{item.text}</span>
                                <img src={arrowRight} alt='FORWARD' />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default More;