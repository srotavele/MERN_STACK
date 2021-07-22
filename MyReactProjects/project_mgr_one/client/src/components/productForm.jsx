import React, { useState } from "react";
import axios from 'axios';




const ProductForm = props => {
    const {switchState, setSwitchState} = props;
    const {formState, setFormState} = props;

    const [validState, setValidState] = useState({})

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const onHandleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/', formState)
        .then(res => {
            console.log(res)
            setValidState({})
            setSwitchState(!switchState)
        })
        .catch(err => {
            const {errors} = err.response.data
            console.log(errors)
            let errorObj = {}
            for(let [key,value] of Object.entries(errors)){
                errorObj[key] = value.message
            }
            setValidState(errorObj)
        })
    }

    return (
        <div >
            <h2>Product Manager</h2><br/>
            <form onSubmit={onHandleSubmit}>
                <p>
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} ></input><br/>
                    {(validState.title) ? <p style = {{color: "red"}}>{validState.title}</p>: null}
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" name="price" onChange={handleChange} ></input><br/>
                    {(validState.price) ? <p style = {{color: "red"}}>{validState.price}</p>: null}
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleChange} ></input><br/>
                    {(validState.description) ? <p style = {{color: "red"}}>{validState.description}</p>: null}
                </p>
                <input type="submit"/>
            </form>
        </div>
    )

}


export default ProductForm;