import React, { useState, useEffect } from "react";
import axios from 'axios';


const InventoryList = props => {
    const {switchState} = props;
    const [inventoryState, setInventoryState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setInventoryState(res.data.allItems))
            .catch(err => console.log(err))
    }, [switchState])




    return (
        <div>
            <h3>List of Available Stuff</h3>
            <ul>
                {inventoryState.map((product, i) =>
                    <li>{product.title}</li>
                )}
            </ul>
        </div>
    )
}














export default InventoryList