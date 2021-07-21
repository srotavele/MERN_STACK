import React, { useState, useEffect } from 'react'
import axios from 'axios';



const PokeMe = (props) => {

    const [poke, setPoke] = useState([])

   

    const clickHandler = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
            .then(response => {
                console.log(response.data.results)
                const {results} = response.data
                setPoke(results)})
            .catch(err => {console.log(err)})
    }

           
    return (
        <div>
            <button type ="submit" className= "btn btn-primary" onClick ={clickHandler}>Get Pokemon</button>
            {poke ? poke.map( (pokemon, index) => {
                return(<div key={index}>{pokemon.name}</div>)
                }):null}
        </div>
    )
}

export default PokeMe;
