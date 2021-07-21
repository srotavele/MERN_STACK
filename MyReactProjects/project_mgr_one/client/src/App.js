import React, { useState } from 'react'
import {Router} from '@reach/router';
import Home from "../src/components/home";
import './App.css';

function App() {



  return (
    <div>
      <Router>
        <Home path="/"/>
      </Router>
    </div>
  );
}

export default App;