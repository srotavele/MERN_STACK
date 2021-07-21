import React, {useState} from 'react';


const Form = props =>{
    const{boxes, setBoxes} = props;

    const handleChange = e => {
       const {name, value} = e.target
       setBoxes({
           ...boxes,
           [name]: value
       })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        
        }

        
        
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Choose Color</h2>
                <input type="text" name="color" onChange = {handleChange}/>
                <h2>Choose Size</h2>
                <input type="text" name="size" onChange = {handleChange}/>
            </div>
            <button type='submit'>Add Box</button>
        </form>
            
    );
}







export default Form