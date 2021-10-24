import React from 'react'

const Label = ({text,...rest}) => {
    return (
        <label {...rest} htmlFor="title" className="text-gray-500 poppins">{text}*</label>
    )
}

export default Label
