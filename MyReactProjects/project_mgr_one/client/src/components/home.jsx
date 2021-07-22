import React, { useState } from "react";
import ProductForm from "../components/productForm";
import InventoryList from "../components/inventoryList";




const Home = props => {
    const [switchState, setSwitchState]  = useState(true)
    const [formState, setFormState] = useState({
        // id: "",
        title:"",
        price: 0,
        description: ""
    })
    return(
        <div>
            <ProductForm formState={formState} setFormState={setFormState} switchState={switchState} setSwitchState={setSwitchState}/>
            <InventoryList formState={formState} setFormState={setFormState} switchState={switchState} setSwitchState={setSwitchState}/>
        </div>
    )
}








export default Home;