import React from 'react';
import OrderCard from '../components/PlaceOrder/OrderCard';
import { useOrder } from '../contexts/OrderProvider';

const PlaceOrderScreen = () => {
    const { order } = useOrder();

    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* left side form  */}
                    <div className="col-span-1">

                    </div>
                    {/* right side  */}
                    <div className="col-span-1">
                        <div className="bg-gray-100 p-4 rounded-lg flex flex-col space-y-3 h-3/4 overflow-y-scroll orderContainer">
                            {order.map(item => (
                                <OrderCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PlaceOrderScreen
