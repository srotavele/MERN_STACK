import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";


const ProductView = props =>{
    const {id} = props;
    const [input, setInput] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res =>{
                console.log(res.data)
                setInput(res.data.getItem)
            })
            .catch(err => console.log(err))
    },[])
    
    return(
        <div>
            <Link to="/">Home</Link>
            <h3>Details For:{input.title}</h3>
            <p>Price: {input.price}</p>
            <p>Description: {input.description}</p>
        </div>
    )
}














export default ProductView;
