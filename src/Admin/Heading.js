import React from 'react'

const Heading = ({text}) => {
    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-2xl poppins text-gray-700">{text}</h1>
            <div className="w-24 h-1 bg-primary rounded-lg"></div>
        </div>
    )
}

export default Heading
