import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const OrderCard = (props) => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="bg-white rounded-lg p-4 flex space-x-3">
            <div className="flex">
                <img className="w-24 object-contain" src={props.image} alt="" />
            </div>
            <div className="flex flex-col space-y-3 flex-grow">
                <h5 className="text-base poppins text-gray-700">{props.title}</h5>
                <h1 className="font-semibold text-lg text-primary poppins">${(props.price * quantity).toFixed(2)}</h1>
                <p className="text-sm poppins text-gray-400">{props.type}</p>
            </div>

            {/* quantity  */}
            <div className="flex items-center px-4 py-2 space-x-3">
                <AiOutlineMinus onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                <span className="text-lg text-gray-700 poppins select-none">{quantity}</span>
                <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
            </div>
        </div>
    )
}

export default OrderCard
