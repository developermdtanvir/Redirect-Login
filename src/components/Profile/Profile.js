import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth/auth';

export const Profile = () => {
    const navigate = useNavigate()
    const auth = useAuth();
    const handleLogOut = () => {
        auth.logOut()
        navigate('/')
    }
    return (
        <div>Welcome {auth.user}
            <button onClick={handleLogOut} >LogOut</button>

        </div>
    )
}
