import React from 'react';
import './App.css';
import { useState } from "react";
import SignUp from './components/SignUp';
// import Results from './components/Results';

function App() {
  const [stuff, moreStuff] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  return (
    <div className="App" >
      <SignUp inputs={stuff} setInputs={moreStuff}/>
      {/* <Results data={stuff}/> */}
    </div>
  );
}

export default App;
