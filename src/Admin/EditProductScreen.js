import React from 'react'
import EditProductForm from './EditProductForm'
import Heading from './Heading'

const EditProductScreen = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Edit Food" />
            {/* form  */}
            <EditProductForm />
        </section>
    )
}

export default EditProductScreen
