import React from 'react'

const TextField = ({...rest}) => {
    return <input {...rest} className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl" />
    // return <input {...rest} className="w-96 px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none bg-gray-50 transition duration-300 border border-gray-100" />
}

export default TextField
