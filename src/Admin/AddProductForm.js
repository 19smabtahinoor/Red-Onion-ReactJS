import React from 'react'
import Button from '../components/Form/Button'

const AddProductForm = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            {/* title and description  */}
            <div className="flex flex-col space-y-4">
                <label htmlFor="title" className="text-gray-500 poppins">Product Title*</label>
                <input id="title" type="text" className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4" required />

                {/* description  */}
                <label htmlFor="description" className="text-gray-500 poppins">Product Description*</label>
                <textarea id="description" cols="30" rows="9" className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none" required ></textarea>
            </div>

            {/* price , image , type  */}
            <div className="flex flex-col space-y-4">
                {/* price  */}
                <label htmlFor="price" className="text-gray-500 poppins">Product Price*</label>
                <input id="price" type="number" className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4" required />
                {/* image url  */}
                <label htmlFor="image" className="text-gray-500 poppins">Product Image URL*</label>
                <input id="image" type="text" className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4" required />
                {/* type  */}
                <label htmlFor="type" className="text-gray-500 poppins">Select the type of food*</label>
                <select id="type" className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>

                {/* button  */}
                <div className="mt-8">
                    <Button text="Add" />
                </div>
            </div>
        </div>
    )
}

export default AddProductForm
