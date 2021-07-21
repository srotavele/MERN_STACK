import React from 'react';
import { Link } from '@reach/router';

const HelloColors = (props) => {
    return (
        <div>
            {isNaN(props.id)
            ? <h1 style = {{backgroundColor: `${props.bg}`, color:`${props.color}`}}>The word is: {props.id}</h1>
            : <h1 style = {{backgroundColor: `${props.bg}`, color:`${props.color}`}}>The number is: {props.id}</h1>
            }
        </div>
    )
}




export default HelloColors;