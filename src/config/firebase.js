import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDWjCegApMBNrfrw8w0op1FZd-GZR0SWdY",
    authDomain: "red-onion-restaurant-41dbe.firebaseapp.com",
    projectId: "red-onion-restaurant-41dbe",
    storageBucket: "red-onion-restaurant-41dbe.appspot.com",
    messagingSenderId: "117333265256",
    appId: "1:117333265256:web:e6a076d00500a340dbe4dd"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;