import React from 'react'
import BottomFooter from './BottomFooter'
import MainFooter from './MainFooter'

const Footer = () => {
    return (
        <footer className="bg-gray-800 px-6 py-12">
            <div className=" max-w-screen-xl mx-auto px-6">
                <MainFooter />
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer
