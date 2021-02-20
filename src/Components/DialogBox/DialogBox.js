import React, { useState } from 'react';
import Button from '../Button/Button';
import './DialogBox.css';

const DialogBox = (props) => {
    const [closeAnimation, setCloseAnimation] = useState(false);

    const closeDialogBox = () => {
        setCloseAnimation(true);
        setTimeout(props.closeButton.onClick, 200);
    }

    return (
        <div className='Dialog-Box' style={closeAnimation ? {animation: 'fade-out-dialog-box 0.1s linear forwards'} : {}}>
            <div className='Backdrop' onClick={closeDialogBox} />
            <div className='Box'>
                <div className='Title'>{props.title}</div>
                <div className='Content-Wrapper'>
                    {props.children}
                </div>
                <div className='Button-Container'>
                    <Button className='Close-Button' onClick={props.continueButton.onClick}>{props.continueButton.name}</Button>
                    <Button className='Close-Button' onClick={closeDialogBox}>{props.closeButton.name}</Button>
                </div>
            </div>
        </div>
    )
}

export default DialogBox;