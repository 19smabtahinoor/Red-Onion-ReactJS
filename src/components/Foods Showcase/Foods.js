import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [foods, setFoods] = useState([])
    const [menuTab, setMenuTab] = useState('Breakfast')
    const [loading, setLoading] = useState(false)

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[])
    //fetching foods data
    useEffect(() => {
        fetch('/foods.json')
        .then(res=> res.json())
            .then(data => setFoods(data))
    },[])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }
    //  focus:text-red-800
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Breakfast' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={menuTab === 'Dinner' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.type).map(item => (
                    loading ? <Skeleton key={item.id} /> : <FoodItem key={item.id} {...item} />
                
                ))}
            </div>
        </section>
    )
}

export default Foods
