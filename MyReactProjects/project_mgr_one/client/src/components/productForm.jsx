import React, { useState } from "react";
import axios from 'axios';




const ProductForm = props => {
    const [formState, setFormState] = useState({
        title:"",
        price: 0,
        description: ""
    })

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const onHandleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/', formState)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div >
            <h2>Product Manager</h2><br/>
            <form onSubmit={onHandleSubmit}>
                <p>
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} ></input><br/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" name="price" onChange={handleChange} ></input><br/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleChange} ></input><br/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )

}


export default ProductForm;