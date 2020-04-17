import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDZW6n6_xTeP3gpdAdylRFrXP7vfOeraG0",
    authDomain: "sap-hackathon-4ddbd.firebaseapp.com",
    databaseURL: "https://sap-hackathon-4ddbd.firebaseio.com",
    projectId: "sap-hackathon-4ddbd",
    storageBucket: "sap-hackathon-4ddbd.appspot.com",
    messagingSenderId: "377864683389",
    appId: "1:377864683389:web:3feea40ea18ffe22f65614",
    measurementId: "G-9NQFXQCH83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
