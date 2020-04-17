import React, { useContext} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { signOut } from '../firebase';
import {useSession} from './App';

const ProfilePage = () => {
    const user = useSession() || {};
    const history = useHistory();

    const handleSignOut = async event => {
        event.preventDefault();
        try {
            await signOut();
            history.push('/signUp');
        } catch (error) {
            console.error(error);
        }
    };

    if (!user) {
        return <Redirect to='/signIn'/>
    }

    return (
        // <ProtectedScreen>
            <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
                <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
                <div
                    style={{
                    backgroundSize: "cover",
                    height: "200px",
                    width: "200px"
                    }}
                    className="border border-blue-300"
                ></div>
                <div className = "md:pl-4">
                <h2 className = "text-2xl font-semibold">{user.displayName || 'No display name specified'}</h2>
                <h3 className = "italic">{user.email}</h3>
                </div>
                </div>
                <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick={event => handleSignOut(event)}>Sign out</button>
            </div>
        // </ProtectedScreen>
    );
}

export default ProfilePage;