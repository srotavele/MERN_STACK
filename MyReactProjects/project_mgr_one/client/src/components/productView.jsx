import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";


const ProductView = props =>{
    const {id} = props;
    // console.log(id)
    const [input, setInput] = useState({})


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res =>{
                console.log(res.data.getItem)
                setInput(res.data.getItem)
            })
            .catch(err => console.log(err))
    },[])

    const handleDelete = id =>{
        console.log("working???")
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to={`/${id}/edit`}></Link>
            <h3>Product: {input.title}</h3>
            <p>Price: {input.price}</p>
            <p>Description: {input.description}</p>
            <button onClick={() => handleDelete(`${id}`)}>Delete</button>
        </div>
    )
}







export default ProductView;
