
import React, { useState } from "react";


const SignUp = (props) => {
    const {inputs, setInputs} = props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        
    };

    return(
    <div className="">
        <form onSubmit={handleSubmit}>
            <div >
                <label> First Name: </label>
                <input name='firstName' type="text" onChange={ onChange } />
            </div>
            <div>
                <label> Last Name: </label>
                <input name='lastName' type="text" onChange={ onChange } />
            </div>
            <div>
                <label> Email Address: </label>
                <input name='email' type="email" onChange={ onChange } />
            </div>
            <div>
                <label> Password: </label>
                <input name='password' type="password" onChange={ onChange }/>
            </div>
            <div>
                <label> Confirm Password: </label>
                <input name='confirmPassword' type="password" onChange={ onChange }/>
            </div>
            <input type="submit" value="Submit User" />
        </form>
                 
                 
    </div>
        );
}

export default SignUp;
