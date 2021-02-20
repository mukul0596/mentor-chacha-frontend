import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DialogBox from '../../../Components/DialogBox/DialogBox';
import AuthService from '../../../Services/AuthService';
import './ResetPassword.css';

const ResetPassword = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const resetPassword = () => {
        if (!oldPassword || !newPassword || !confirmNewPassword)
            return toast.warning('Cannot left any field marked with * empty!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000});

        if(newPassword !== confirmNewPassword)
            return toast.warning('Both new password did not match!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000});
        
        if (oldPassword === newPassword)
            return toast.warning('New password is same as old password!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000});

        AuthService.resetPassword({
            oldPassword,
            newPassword
        }).then((data) => {
            const { success } = data;
            if (success) {
                toast.success('Successfully updated password!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                props.setOpenResetPassword();
            } else {
                toast.error(data.err.msgBody, {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
            }
        });
    }

    return (
        <div className='Reset-Password'>
            <DialogBox title='Reset Password' continueButton={{name: 'Save', onClick: resetPassword}} closeButton={{name: 'Cancel', onClick: () => props.setOpenResetPassword(false)}}>
                <div className='Field-Wrapper'>
                    <label htmlFor='oldPassword'>Old Password*</label>
                    <input type='password' name='oldPassword' id='oldPassword' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </div>
                <div className='Field-Wrapper'>
                    <label htmlFor='newPassword'>New Password*</label>
                    <input type='password' name='newPassword' id='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className='Field-Wrapper'>
                    <label htmlFor='confirmNewPassword'>Confirm New Password*</label>
                    <input type='password' name='confirmNewPassword' id='confirmNewPassword' value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>
            </DialogBox>
        </div>
    )
}

export default ResetPassword;