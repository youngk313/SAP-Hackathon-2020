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
            <div className = "md:pl-4" style ={{textAlign: "center"}}>
            <img style ={{width:"100px"}}src={user.photoURL || "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfile_avatar_placeholder_large.png&tbnid=gp8LDHLwxDk-WM&vet=12ahUKEwj8-5uS5-_oAhWUFjQIHekbAhEQMygHegUIARCGAg..i&docid=xZyB11jLps67TM&w=360&h=360&q=avatar%20photo&hl=en-GB&ved=2ahUKEwj8-5uS5-_oAhWUFjQIHekbAhEQMygHegUIARCGAg"}/>
            <h2 className = "text-2xl font-semibold">{user.displayName || 'No display name specified'}</h2>
            <h3 className = "italic">{user.email}</h3>
            </div>
            </div>
            <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick={event => handleSignOut(event)}>Sign out</button>
        </div>
    );
}

export default ProfilePage;