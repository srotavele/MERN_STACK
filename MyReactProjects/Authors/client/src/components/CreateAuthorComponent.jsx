import React, { useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios'



const CreateAuthor = props => {

    const [input, setInput] = useState('')
    const [validState, setValidState] = useState({})

    const handleCancel = () => {
        console.log('CANCEL HAS BEEN CLICKED')
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/new", { "name": input })
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
            <h6 className= 'lead'>Add a New Author:</h6>
            <form onSubmit={submitHandler}>
                <p className= 'lead'>
                    Name:
                    <input type="text" name="name" onChange={e => setInput(e.target.value)} />
                    {(validState.name) ? <p style={{ color: "red" }}>{validState.name}</p> : null}
                </p>
                <Link className='btn btn-primary' to='/'>Cancel</Link>|
                <button className='btn btn-secondary' type="submit">Create</button>
            </form>
        </div>
    )

}








export default CreateAuthor