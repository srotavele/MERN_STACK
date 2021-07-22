import React, { useState } from 'react'
import {Router} from '@reach/router';
import Home from "../src/components/home";
import ProductView from './components/productView';
import './App.css';

function App() {



  return (
    <div>
      <Router>
        <Home path="/"/>
        <ProductView path='/products/:id'/>
      </Router>
    </div>
  );
}

export default App;