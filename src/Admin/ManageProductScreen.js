import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import useFetch from '../hooks/useFetch';
import Heading from './Heading';

const ManageProductScreen = () => {
    const [foods, setFoods] = useFetch();

    //handle delete 
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/foods/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    swal("Successful!", "Deleted successfully!", "success");
                    const restFoods = foods.filter(item => item._id !== id);
                    setFoods(restFoods)
                }
            })
    }

    return (
        <div>
            {/* heading   */}
            <Heading text="Manage Products" />
            {/* product s  */}

            <div className="flex flex-col my-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foods.map(item => (
                                        <tr className="bg-white border-b" key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <img className="w-16" src={item.image} alt={item.title} />
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.title}
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.price}
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.foodType}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center space-x-3">
                                                <FiEdit className="cursor-pointer text-2xl text-green-600" />
                                                <AiOutlineDelete className="cursor-pointer text-2xl text-red-600" onClick={() => handleDelete(item._id)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageProductScreen
