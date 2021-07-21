import React from 'react';
import { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Form from "./components/form";
import Results from "./components/results";
import './App.css';

function App() {
    const [inputs, setInputs] = useState({
        resource: "people",
        id: ""
    });
const [results, setResults] = useState({})


    return (
        <div className="App">
            <Form inputs={inputs} setInputs={setInputs} />
            <Router>
                <Results path="/:resource/:id" results={results} setResults={setResults} />
            </Router>
        </div>
    );
}

export default App;
