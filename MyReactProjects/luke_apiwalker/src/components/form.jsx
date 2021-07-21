import axios from 'axios';
import React from 'react';
import {navigate} from '@reach/router';






const Form = props => {
    const {inputs,setInputs} = props;

    const onChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        console.log(inputs)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        navigate(`/${inputs.resource}/${inputs.id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div style= {{display:'flex', justifyContent: 'center'}}>
            <div className="">
                <h3>Search For:</h3>
                <select onChange = {onChange} name="resource">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div className="">
                <h3>ID:</h3>
                <input onChange = {onChange} name="id" type = "number"/>
                <button type ="submit">Search</button>
            </div>
        </div>
        </form>
        )
}
export default Form;