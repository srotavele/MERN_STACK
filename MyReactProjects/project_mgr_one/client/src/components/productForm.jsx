import React, { useState } from "react";



const ProductForm = (props) => {
    const [formState, setFormState] = useState;
    const [onSubmitState, setOnSubmitState] = useState;
    const [isError, setIsError] = useState;
    const [title, setTitle] = useState;
    const [price, setPrice] = useState;
    const [description, setDescription] = useState;

    const submitHandler = e =>{
        e.preventDefault();
    }

    return (
        <div>
            <h2>Product Manager</h2><br/>
            <form onSubmit ={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type='text' name="title" value={formState.title}></input><br/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" name="price" value={formState.price}></input><br/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="description" value={formState.description}></input><br/> 
                </p>
                <input type="submit"/>
            </form>
        </div>
    )   

}


export default ProductForm;