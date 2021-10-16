import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Back = () => {
    return (
        <div className="relative top-8">
            <Link to="/" className="hover:underline poppins text-gray-700 select-none flex items-center space-x-2"><MdOutlineKeyboardBackspace /> <span>Back</span></Link>
        </div>
    )
}

export default Back
