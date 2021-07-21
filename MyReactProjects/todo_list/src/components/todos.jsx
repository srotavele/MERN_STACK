import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';



const Todo = props => {
    const {tasks, setTasks} = props
    const {idx, setIdx} = props

    const handleDelete = (e,i) =>{
        const toDelete = tasks.filter((task, index)=> index != i)
        setTasks(toDelete)
    }
    const handleChange = (e,i) =>{
       const check = [...tasks]
       check[i].isComplete = !check[i].isComplete
       setTasks(check)
    }

    return(
        <div>{
            tasks.map( (task,i) =>{
                return <div key={i} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                {
                (task.isComplete)? <p style={{textDecoration: "line-through"}}>{task.entry} </p> : <p>{task.entry} </p>
                }
                <input type="checkbox" checked={task.isComplete} onChange={ (e) => handleChange(e,i)}/>
                <button onClick={(e) => handleDelete(e,i)} >Delete </button>
            </div>
            })
            }
        </div>
    )

}











export default Todo;