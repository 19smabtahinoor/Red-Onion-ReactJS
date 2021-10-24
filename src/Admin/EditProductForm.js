import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert'
import Button from '../components/Form/Button'
import Label from '../components/Form/Label'
import TextField from '../components/Form/TextField'


const EditProductForm = () => {
    const [foods, setFoods] = useState({});
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
        .then(res => res.json())
        .then(data => setFoods(data));
    }, [id])

    //track the update 
    const handleUpdate = (e) => {
        const {value , name } = e.target
        
        setFoods((prev) => {
            return {
                ...prev , 
                [name]:value
            }
        })
    }

    //handleUpdate 
    const handleSubmit = e => {
        e.preventDefault();
        const title = foods.title;
        const description = foods.description;
        const price = foods.price;
        const image = foods.image;
        const foodType = foods.foodType;

        const updateFood = { title, description, price, image, foodType  }

        //update 
        fetch(`http://localhost:5000/foods/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(updateFood)
        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                swal("Updated", "Update Successfully!", "success");
            }
            history.push('/admin/manage-products');
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
                        name="title"
                        value={foods.title || " "}
                        onChange={handleUpdate}
                        required />

                    {/* description  */}
                    <Label htmlFor="description" text="Food Description" />
                    <textarea
                        id="description"
                        cols="30" rows="9"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        name="description"
                        value={foods.description || " "}
                        onChange={handleUpdate}
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
                        name="price"
                        value={foods.price || " "}
                        onChange={handleUpdate}
                        required />
                    {/* image url  */}
                    <Label htmlFor="image" text="Food Image URL" />
                    <TextField
                        id="image"
                        type="text"
                        name="image"
                        value={foods.image || " "}
                        onChange={handleUpdate} required />
                    {/* type  */}
                    <Label htmlFor="type" text="Select the type of food" />
                    <select
                        id="type"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4"
                        value={foods.foodType || " "}
                        name="foodType"
                        onChange={handleUpdate}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>

                    {/* button  */}
                    <div className="mt-8">
                        <Button text="Update" type="submit" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditProductForm
