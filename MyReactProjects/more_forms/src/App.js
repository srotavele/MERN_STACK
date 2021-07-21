
import './App.css';
import UserForm from './components/userForm';
import React, { useState } from  'react';

function App() {
  const [userFormState, setUserFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
})

  const [checkState, setCheckState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false
  })
  
  return (
    <div className="App">
      <UserForm bass= {userFormState} drums = {setUserFormState} gtrs = {checkState} keys = {setCheckState}/>
    </div>
  );
}

export default App;
