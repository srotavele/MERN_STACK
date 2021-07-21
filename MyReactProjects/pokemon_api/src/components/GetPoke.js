import React, { useState, useEffect } from 'react'



const PokeMe = (props) => {

    const [poke, setPoke] = useState(0)

    const clickHandler = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
            .then(response => {
                return response.json();
            }).then(response => {
                setPoke({pokes:response.results});
            }).catch(err=>{
                console.log(err);
            });
    }

    return (
        <div>
            <button type ="submit" className= "btn btn-primary" onClick ={clickHandler}>Get Pokemon</button>
            {poke.pokes ? poke.pokes.map( (pokemon, index) => {
                return(<div key={index}>{pokemon.name}</div>)
                }):null}
        </div>
    )
}

export default PokeMe;