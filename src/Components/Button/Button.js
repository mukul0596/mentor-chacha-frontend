import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button className='Button' style={props.style} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;