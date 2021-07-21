import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import {Navigate} from '@reach/router';
import Home from './components/home';
import Number from './components/number';
import HelloColors from './components/helloColors';


function App() {




  return (
    <div className="App">
      <Router>
        <Home path="/Home"/>
        <Number path="/:id"/>
        <HelloColors path="/:id/:color/:bg"/>
      </Router>
    </div>
  );
}

export default App;
