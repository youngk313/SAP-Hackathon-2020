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
        await addDisplayName(displayName);
        history.push('/');
    } catch (error) {
        console.error(error);
    }
};

export const addDisplayName = async (auth, displayName) => {
    if (!!displayName) {
        try {
            await auth.currentUser.updateProfile({displayName});
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