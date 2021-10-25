import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import Button from '../components/Form/Button';
import Label from '../components/Form/Label';
import TextField from '../components/Form/TextField';

const AddProductForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [foodType, setFoodType] = useState('Breakfast')
    const history = useHistory()

    //handleSelect option 
    const handleFoodType = e => {
        setFoodType(e.target.value)
    }

    //post to database 
    const handleSubmit = e => {
        e.preventDefault()
        const newFood = { title, description, price, image, foodType }

        //POST 
        fetch("http://localhost:5000/foods", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        }).then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Food Added!", "Food is added to the store!", "success");
                    history.push('/admin/manage-products');
                } else {
                    swal("Unsuccessful !", "Food is not added to the store!", "error");
                }
            })
    }

    return (
        <>
            <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6" onSubmit={handleSubmit}>
                {/* title and description  */}
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="title" text="Food Title" />
                    <TextField
                        id="title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required />

                    {/* description  */}
                    <Label htmlFor="description" text="Food Description" />
                    <textarea
                        id="description"
                        cols="30" rows="9"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >

                    </textarea>
                </div>

                {/* price , image , type  */}
                <div className="flex flex-col space-y-4">
                    {/* price  */}
                    <Label htmlFor="price" text="Food Price" />
                    <TextField
                        id="price"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required />
                    {/* image url  */}
                    <Label htmlFor="image" text="Food Image URL" />
                    <TextField
                        id="image"
                        type="text"
                        value={image}
                        onChange={e => setImage(e.target.value)} required />
                    {/* type  */}
                    <Label htmlFor="type" text="Select the type of food" />
                    <select
                        id="type"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4"
                        value={foodType}
                        onChange={handleFoodType}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>

                    {/* button  */}
                    <div className="mt-8">
                        <Button text="Add" type="submit" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddProductForm
