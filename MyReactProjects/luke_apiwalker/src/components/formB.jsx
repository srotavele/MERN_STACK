// import axios from 'axios';
// import React from 'react';
// import {navigate} from '@reach/router';






// const Form = props => {
//     const [inputs,setInputs] = props;

//     const newResource = e =>{
//         setInputs({
//             ...inputs,
//             resource: e.target.value
//         })
//     }
//     const newID = e =>{
//         setInputs({
//             ...inputs,
//             id:e.target.value
//         })
//     }
//     const handleSubmit = e =>{
//         e.preventDefault();
//         navigate("/WTF")
//     }
//     const clickHandler = () =>{
//          
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//         <div style= {{display:'flex', justifyContent: 'center'}}>
//             <div className="">
//                 <h3>Search For:</h3>
//                 <select>
//                     <option>People</option>
//                     <option>Planets</option>
//                 </select>
//             </div>
//             <div className="">
//                 <h3>ID:</h3>
//                 <input type = "number"/>
//                 <button type ="submit" className= "btn btn-primary" onClick ={clickHandler}>Search</button>
//                 {getPeople ? getPeople.map( ( person, i) => {
//                     return (<div key={i}>{person.name}</div>)
//                 }): null}
//             </div>
//         </div>
//         </form>
//         )
// }
// export default Form;