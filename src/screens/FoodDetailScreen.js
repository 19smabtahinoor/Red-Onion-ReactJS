import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useOrder } from '../contexts/OrderProvider';
import useFetch from '../hooks/useFetch';

const FoodDetailScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const { title } = useParams();
    const [foods] = useFetch();
    const { handleOrder } = useOrder();

    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">

            <div className="relative top-8">
                <Link to="/" className="hover:underline poppins text-gray-700 select-none flex items-center space-x-2"><MdOutlineKeyboardBackspace /> <span>Back</span></Link>
            </div>

            {foods?.filter(item => item.title === title)?.map((food) => (
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10" key={food.id}>

                        {/* left side  */}
                        <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                            <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">{food.title}</h1>
                            <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">{food.description}</p>

                            {/* price and quantity  */}
                            <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
                                <h1 className="text-3xl font-bold text-black poppins select-none">${(food.price * quantity).toFixed(2)}</h1>

                                {/* quantity  */}
                                <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                                    <AiOutlineMinus onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                                    <span className="text-lg text-gray-700 poppins select-none">{quantity}</span>
                                    <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                                </div>
                            </div>

                            {/* add button  */}
                            <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                                <button className="flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => handleOrder(food )}>
                                    <BsCart2 className="text-xl" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>

                        </div>
                        {/* right side  */}
                        <div className="order-1 md:order-2 lg:order-2">
                            <img src={`../../${food.image}`} className="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                        </div>
                    </div>
                </div>
            ))}

        </main>
    )
}

export default FoodDetailScreen
