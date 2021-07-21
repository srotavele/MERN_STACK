import React, { useState } from "react";
import ProductForm from "../components/productForm";
import InventoryList from "../components/inventoryList";



const Home = props => {
    const [switchState, setSwitchState]  = useState(true)
    return(
        <div>
            <ProductForm switchState={switchState} setSwitchState={setSwitchState}/>
            <InventoryList switchState={switchState}/>
        </div>
    )
}








export default Home;