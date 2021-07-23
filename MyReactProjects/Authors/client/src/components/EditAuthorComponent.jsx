import React, { useState, useEffect } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios'



const EditAuthor = props =>{

    const {author_id} = props
    const [input, setInput] = useState("")
    const [validState, setValidState] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + author_id)
        .then(res => {
            console.log(res.data.name)
            setInput(res.data.name)})
        .catch(err => console.log(err))
    },[])


    const submitHandler = e => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/authors/" + author_id, {"name": input})
            .then(res => navigate('/'))
            .catch(err => {
                const { errors } = err.response.data
                console.log(errors)
                let errorObj = {}
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }



    return (
        <div>
            <Link className='btn btn-link' to='/'>Home</Link>
            <h6 className= 'lead'>Edit this Author:</h6>
            <form onSubmit={submitHandler}>
                <p className= 'lead'>
                    Name:
                    <input type="text" name="name" onChange={e => setInput(e.target.value)} value={input} />
                    {(validState.name) ? <p style={{ color: "red" }}>{validState.name}</p> : null}
                </p>
                <Link className='btn btn-primary' to='/'>Cancel</Link>|
                <button className='btn btn-secondary' type="submit">Update</button>
            </form>
        </div>
    )
}










export default EditAuthor