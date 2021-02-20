import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import AuthService from '../../Services/AuthService';
import Header from '../../Components/Header/Header';
import { toast } from 'react-toastify';
import Button from '../../Components/Button/Button';
import ResetPassword from './ResetPassword/ResetPassword';
import './Profile.css';

const Profile = (props) => {
    const { user, setUser } = useContext(AuthContext);

    const [updatedUser, setUpdatedUser] = useState(user);
    const [openResetPassword, setOpenResetPassword] = useState(false);
    
    const saveProfile = (e) => {
        e.preventDefault();
        if (user.name === updatedUser.name && user.email === updatedUser.email && user.age === updatedUser.age && user.gender === updatedUser.gender && user.category === updatedUser.category) {
            return toast.warning('Nothing updated in profile!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        };

        AuthService.updateProfile(updatedUser).then(data => {
            const {success, user} = data;
            if (success) {
                setUser(user);
                toast.success('Successfully updated profile!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            }
        });
    }

    return (
        <div className='Profile Page'>
            <Header isProfilePage={true}>Profile</Header>
            
            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    <form onSubmit={(e) => saveProfile(e)}>
                        <div className='Reset-Password'>
                            <span onClick={() => setOpenResetPassword(true)}>Reset Password</span>
                        </div>
                        <div className='Field-Wrapper'>
                            <label>Phone</label>
                            <div className='ReadOnly-Data'>{user.phone}</div>
                        </div>

                        <div className='Field-Wrapper'>
                            <label>Class</label>
                            <div className='ReadOnly-Data'>{user.class}</div>
                        </div>
                        <div className='Field-Wrapper'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' value={updatedUser.name} onChange={(e) => setUpdatedUser({...updatedUser, name: e.target.value})} required />
                        </div>
                        <div className='Field-Wrapper'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' value={updatedUser.email} onChange={(e) => setUpdatedUser({...updatedUser, email: e.target.value})} required />
                        </div>
                        <div className='Field-Wrapper'>
                            <label htmlFor='age'>Age</label>
                            <input type='number' name='age' id='age' value={updatedUser.age} onChange={(e) => setUpdatedUser({...updatedUser, age: e.target.value})} required />
                        </div>
                        <div className='Field-Wrapper'>
                            <label htmlFor='gender'>Gender</label>
                            <select name='gender' id='gender' value={updatedUser.gender} onChange={(e) => setUpdatedUser({...updatedUser, gender: e.target.value})} required>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>
                        <div className='Field-Wrapper'>
                            <label htmlFor='category'>Category</label>
                            <select name='category' id='category' value={updatedUser.category} onChange={(e) => setUpdatedUser({...updatedUser, category: e.target.value})} required>
                                <option value='General'>General</option>
                                <option value='OBC'>OBC</option>
                                <option value='SC'>SC</option>
                                <option value='ST'>ST</option>
                            </select>
                        </div>
                        <Button type='submit' style={{margin: '0 auto', marginBottom: '16px', display: 'block'}}>Save</Button>
                    </form>
                </div>
            </div>
            {
                openResetPassword
                ? <ResetPassword setOpenResetPassword={setOpenResetPassword} />
                : null
            }
        </div>
    )
}

export default Profile;