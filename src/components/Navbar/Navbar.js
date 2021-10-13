import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo2.png';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const history = useHistory();
    const { user, signOutUser } = useAuth()

    return (
        <header className="bg-white top-0 left-0 w-full border-b border-gray-300">
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* left  */}
                <div className="flex flex-grow">
                    <img className="w-36 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                {/* right  */}
                {user.displayName ? (
                    <>
                        <div className="flex items-center justify-end space-x-4">
                            <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full"/>
                            <p className="text-gray-700 poppins">{user.displayName}</p>
                            <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700" onClick={signOutUser} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-end space-x-4">
                            <button className="text-sm poppins" onClick={() => history.push('/signin')}>Sign In</button>
                            <button className="text-sm bg-primary py-2 px-4 rounded-full text-white poppins" onClick={() => history.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )}

            </nav>
        </header>
    )
}

export default Navbar
