import { signInWithGoogle } from '../firebase';
import firebase from "firebase/app";

export const signInWithGoogleHandler = async (event, auth, history) => {
    event.preventDefault();
    try {
        await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await signInWithGoogle();
        history.push('/');
    } catch (e) {
        console.error(e);
    }
};

export const createUserWithEmailAndPasswordHandler = async (event, auth, email, password, displayName, history) => {
    event.preventDefault();
    try {
        await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await auth.createUserWithEmailAndPassword(email, password);
        await addDisplayName(auth, displayName);
        history.push('/');
    } catch (error) {
        console.error(error);
    }
};

export const addDisplayName = async (auth, displayName) => {
    if (!!displayName) {
        try {
            await auth.currentUser.updateProfile({displayName, photoURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FProfile_avatar_placeholder_large.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfile_avatar_placeholder_large.png&tbnid=gp8LDHLwxDk-WM&vet=12ahUKEwj8-5uS5-_oAhWUFjQIHekbAhEQMygHegUIARCGAg..i&docid=xZyB11jLps67TM&w=360&h=360&q=avatar%20photo&hl=en-GB&ved=2ahUKEwj8-5uS5-_oAhWUFjQIHekbAhEQMygHegUIARCGAg'});
        } catch (error) {
            console.error(error);
        }
    }
};

export const signInWithEmailAndPasswordHandler = async (event, auth, email, password, history) => {
    event.preventDefault();
    try {
        await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await auth.createUserWithEmailAndPassword(email, password);
        history.push('/')
    } catch (error) {
        console.error(error)
    }
};