import React, { useState, useEffect } from "react";
import axios from 'axios';
import { navigate } from "@reach/router";

const EditProduct = props => {
    const {id} = props
    // const {switchState, setSwitchState} = props;
    // const [validState, setValidState] = useState({})
    const [formState, setFormState] = useState({})
       

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res =>{
                console.log(res.data)
                setFormState(res.data.getItem)
            })
            .catch(err => console.log(err))
    },[])

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    const onHandleSubmit = e => {
        console.log("Working?")
        e.preventDefault()
        axios.put('http://localhost:8000/api/products/' + id, formState)
        .then(res =>{
            // console.log(res.data))
            navigate(`/products/${id}`)
        })
        .catch(err => console.log(err))
        }


    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={onHandleSubmit}>
                <p>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={formState.title}/><br/>
                </p>
                <p>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={handleChange} value= {formState.price}/><br/>
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" name="description" onChange={handleChange} value={formState.description}/><br/>
                </p>
                <button type="submit">Update</button>
            </form>
        </div>
    )

}



export default EditProduct;