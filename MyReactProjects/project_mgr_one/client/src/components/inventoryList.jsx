import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from 'axios';


const InventoryList = props => {
    const { switchState, setSwitchState } = props;
    const [inventoryState, setInventoryState] = useState([])
   
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setInventoryState(res.data.allItems))
            .catch(err => console.log(err))
    }, [switchState])


    const handleDelete = product_id => {
        console.log("test")
        axios.delete("http://localhost:8000/api/products/" + product_id)
            .then(res => setSwitchState(!switchState))
            .catch(err => console.log(err))
    }



    return (
        <div>
            <h3>List of Available Stuff</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventoryState.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td>{product.title}</td>
                                    <td>
                                        <Link to={`/products/${product._id}`}>View</Link>
                                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}














export default InventoryList