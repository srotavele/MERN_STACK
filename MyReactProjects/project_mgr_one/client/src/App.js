import React, { useState } from 'react'
import {Router} from '@reach/router';
import Home from "../src/components/home";
import ProductView from './components/productView';
import EditProduct from './components/editProduct';
import './App.css';

function App() {
  


  return (
    <div>
      <Router>
        <Home path="/"/>
        <ProductView path='/products/:id'/>
        <EditProduct path = '/products/:id/edit'/>
      </Router>
    </div>
  );
}

export default App;