import React from 'react';
import { Link } from 'react-router-dom';
import graduationCapIcon from '../../Assets/Icons/graduation-cap.png';
import graduationCapActiveIcon from '../../Assets/Icons/graduation-cap-active.png';
import circledQIcon from '../../Assets/Icons/circled-q.png';
import circledQActiveIcon from '../../Assets/Icons/circled-q-active.png';
import bellIcon from '../../Assets/Icons/bell.png';
import bellActiveIcon from '../../Assets/Icons/bell-active.png';
import swotIcon from '../../Assets/Icons/swot.png';
import swotActiveIcon from '../../Assets/Icons/swot-active.png';
import moreIcon from '../../Assets/Icons/more.png';
import moreActiveIcon from '../../Assets/Icons/more-active.png';
import './NavBar.css';

const NAVBAR_DATA = [
    {
        link: '/student_center',
        text: 'Student Center',
        icon: graduationCapIcon,
        activeIcon: graduationCapActiveIcon
    },
    {
        link: '/question_bank',
        text: 'Question Bank',
        icon: circledQIcon,
        activeIcon: circledQActiveIcon
    },
    {
        link: '/notification',
        text: 'Notification',
        icon: bellIcon,
        activeIcon: bellActiveIcon
    },
    {
        link: '/swot_analysis',
        text: 'SWOT Analysis',
        icon: swotIcon,
        activeIcon: swotActiveIcon
    },
    {
        link: '/more',
        text: 'More',
        icon: moreIcon,
        activeIcon: moreActiveIcon
    },
];

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            {
                NAVBAR_DATA.map(data => (
                    <Link key={data.link} to={data.link} className='NavElement' style={(props.location.pathname === data.link) ? {borderColor: '#0085FF'} : {borderColor: 'transparent'}}>
                        {   (props.location.pathname !== data.link)
                            ? <img src={data.icon} alt={data.text} />
                            : <img src={data.activeIcon} alt={data.text} />
                        }
                        <div className={(props.location.pathname !== data.link) ? 'NavText' : 'NavText Active'}>{data.text}</div>
                    </Link>            
                ))
            }
        </div>
    )
}

export default NavBar;