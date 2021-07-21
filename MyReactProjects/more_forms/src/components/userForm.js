import React, { useState } from  'react';



const UserForm = props => {
    const {bass, drums} = props;

        
    const [gtrs, keys] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    const handleChange = e => {
        const {name, value} = e.target
        drums({
            ...bass,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
            if (bass.firstName.length <2){
                var firstName = true
            }
            if (bass.lastName.length  <2){
                var lastName = true
            }
            if ( ! (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(bass.email)){
                var email = true
            }
            if(bass.password.length < 8 ){
                var password = true
            }
            if(bass.confirmPassword !== bass.password){
                var confirmPassword = true
            }
        keys({
            ...gtrs,
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
    }
    return (
        <form onSubmit = {handleSubmit}>
            <h3>Hello There</h3>
	        <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={ handleChange } />
                {( gtrs.firstName ) ? <p style = {{color: 'red'}}>First Name must be a minimum of two characters</p> : null }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={ handleChange} />
                {( gtrs.lastName ) ? <p style = {{color: 'red'}}>Last Name must be a minimum of two characters</p> : null }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ handleChange } />
                {( gtrs.email ) ? <p style = {{color: 'red'}}>Email format is invalid</p> : null }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={ handleChange } />
                {( gtrs.password ) ? <p style = {{color: 'red'}}>Password must be a minimum of 8 characters</p> : null }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={ handleChange } />
                {( gtrs.confirmPassword ) ? <p style = {{color: 'red'}}>Passwords do not match</p> : null }
            </div>
            <input type="submit" value="Register" />
        </form>
    );
    
}
export default UserForm;
