import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo2.png';
import { useOrder } from '../../contexts/OrderProvider';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const history = useHistory();
    const { user, signOutUser } = useAuth();
    const { order } = useOrder();

    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* left  */}
                <div className="flex flex-grow">
                    <img className="w-36 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                {/* right  */}
                {user.displayName ? (
                    <>
                        <div className="flex items-center justify-end space-x-4">
                            <div className="relative flex cursor-pointer" onClick={() => history.push('/orders')}>
                                <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">{order.length}</span>
                                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
                            </div>
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                            <p className="text-gray-700 poppins">{user.displayName}</p>
                            <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700" onClick={signOutUser} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-end space-x-6">
                            <button className="poppins" onClick={() => history.push('/signin')}>Sign In</button>
                            <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => history.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )}

            </nav>
        </header>
    )
}

export default Navbar
