import React from 'react'
import AddProductForm from './AddProductForm'
import Heading from './Heading'

const AddProductScreen = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Add Product" />

            {/* form  */}
            <div>
                <AddProductForm />
            </div>
        </section>
    )
}

export default AddProductScreen
