import React from 'react'
import Brand from '../Form/Brand'

const MainFooter = () => {
    // footer links 
    const FooterLinks = [
        { id: 1, text: 'About Online Food' },
        { id: 2, text: 'Read our blog' },
        { id: 3, text: 'Sign up to deliver' },
        { id: 4, text: 'Add your restaurant' },
    ]
    return (
        <div className="flex">
            {/* logo  */}
            <div className="flex flex-grow">
                <Brand />
            </div>
            {/* footer links  */}
            <div className="flex flex-col space-y-2">
                {FooterLinks.map(item => (
                    <span className="text-white poppins" key={item.id}>{item.text}</span>
                ))}
            </div>
        </div>
    )
}

export default MainFooter
