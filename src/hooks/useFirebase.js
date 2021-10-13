import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import initializeAuthentication from '../config/firebase';


//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const auth = getAuth();
    const history = useHistory();

    //on State Change 
    useEffect(() => {
        onAuthStateChanged(auth,user => {
            if (user) {
                setUser(user)
            }
        })
    },[auth])

    //sign up functionality
    const signUpUser = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // const {displayName, photoURL, email} = res.user;
                setUser(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                }).then(() => {
                    history.push('/');
                })

            }).catch(err => console.log(err.message))
    }

    //sign in functionality
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email , password)
        .then(res => {
            setUser(res.user);
            history.push('/');
        })
        .catch(err => console.log(err.message))
    }


    //google sign in 
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(res => {
            setUser(res.user);
            history.push('/');
        }).catch(err => console.log(err.message))
    }

    // sign out 
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
            history.push('/signin')
        }).catch((err) => {
            console.log(err.message)
        });
    }

    return {
        user,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
}

export default useFirebase
