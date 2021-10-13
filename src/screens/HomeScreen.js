import React from 'react';
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
    const { user, signOutUser} = useAuth();
    console.log(user)

    return (
        <div>
            <h1 className="text-3xl">{user.email}</h1>
            <h1 className="text-3xl">{user.displayName}</h1>
            <img src={user.photoURL} alt={user.email} />
            <button onClick={signOutUser}>Logout</button>
        </div>
    )
}

export default HomeScreen
