import React, { createContext, useContext, useState } from 'react';

export const OrderContext = createContext();

export const useOrder = () => {
    return useContext(OrderContext)
}
const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    // const [quantity, setQuantity] = useState(1)

    // handle order function 
    const handleOrder = (food) => {
        setOrder((prevValue) => {
            return [
                ...prevValue,
                food
            ]
        })
    }

    // //handle Order Quantity 
    // const handleOrderDescrease = () => {
    //     if(quantity === 1){
    //         setQuantity(1)
    //     }else{
    //         setQuantity(quantity - 1)
    //     }
    // }
    // const handleOrderIncrease = () => {
    //     setQuantity(quantity + 1)
    // }

    const value = {
        order,
        handleOrder,

    }
    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider
