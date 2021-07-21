import axios from 'axios';
import React, { PureComponent } from 'react';
import {useState, useEffect} from 'react';
import { Router, Link } from '@reach/router';






const Results = props =>{
    const {results, setResults} = props
    const [error, setError] = useState(false)
    const [homeWorld, setHomeWorld] = useState("");
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${props.resource}/${props.id}`)
            .then((response) => {
                console.log(response.data)
                setResults(response.data)
                setError(false)
                if (props.resource == "people"){
                    axios.get(results.homeworld)
                        .then((response) =>{
                            console.log(response.data)
                            setHomeWorld(response.data)
                        })
                }
            })
            .catch((err) => {
                console.log(`Encountered Error: ${err}`)
                setError(true)
            })
    }, [props.resource, props.id]);

    if (error == true){
        return(
            <div>
                <h1 style={{ color: "red" }}>These aren't the droids you're looking for!</h1>
                <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768"/>
                <h1 style={{ color: "red" }}>May the Schwartz be with you...</h1>
            </div>
        )
    }else {
        if (props.resource == "people"){
            return (
                <div>
                    <p>Name: {results.name}</p>
                    <p>Height: {results.height}</p>
                    <p>Weight: {results.mass}</p>
                    <p>Hair Color: {results.hair_color}</p>
                    <p>Skin Color: {results.skin_color}</p>
                    {/* <p>Homeworld: {homeWorld.name}</p> */}
                    <p>Homeworld: <a href={results.homeworld}>{homeWorld.name}</a></p>
                    {/* <p>Homeworld: <Link to ={results.homeworld}>{homeWorld.name}</Link></p> */}
                </div>
            )
        }else if (props.resource =="planets"){
            return (
                <div>
                    <p>Name: {results.name}</p>
                    <p>Climate: {results.climate}</p>
                    <p>Diameter: {results.diameter}</p>
                    <p>Gravity: {results.gravity}</p>
                    <p>Orbital Period: {results.orbital_period}</p>
                </div>
            )
        }
    }

}


















export default Results;